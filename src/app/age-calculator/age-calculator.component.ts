import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateUtilsService } from '../services/date-utils.service';

@Component({
  selector: 'app-age-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './age-calculator.component.html',
  styleUrl: './age-calculator.component.css'
})
export class AgeCalculatorComponent {
  year!: number;
  month!: number;
  day!: number;
  ageResult!: string;
  intervalId: any;

  constructor(private dateUtils: DateUtilsService ){}
  
  
  calculateAge() {
    const birthDate = new Date(this.year, this.month - 1, this.day); 
    
    const validationError = this.validateInputDate(birthDate);
    if (validationError) {
      this.ageResult = validationError;
      clearInterval(this.intervalId);
      return;
    }
  
    this.ageResult = this.dateUtils.calculateAge(birthDate);
    // 
    this.intervalId = setInterval(() => {
      this.calculateAge();
    }, 1000);
  }

  validateInputDate(inputDate: Date): string | null {
    const currentDate = new Date();

    if (isNaN(inputDate.getTime())) {
      return 'Invalid date';
    }

    if (inputDate.getTime() > currentDate.getTime()) {
      return 'Date of birth cannot be in the future';
    }
    
    if (isNaN(this.year) || this.year < 0 ) {
      
      return 'Invalid year';
    }

    if (this.month < 1 || this.month > 12) {
      return 'Invalid month';
    }

    const daysInMonth = new Date(this.year, this.month, 0).getDate();
    if (this.day < 1 || this.day > daysInMonth) {
      return 'Invalid day for the selected month';
    }

    return null
  }
}
