import { Component } from '@angular/core';
import { DateUtilsService } from '../services/date-utils.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-birthday-countdown',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './birthday-countdown.component.html',
  styleUrl: './birthday-countdown.component.css'
})
export class BirthdayCountdownComponent {
  year!: number;
  month!: number;
  day!: number;
  ageResult!: string;
  intervalId: any;

  constructor(private dateUtils: DateUtilsService ){}
  
  
  calculateAge() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextBirthDay = new Date(currentYear, this.month - 1, this.day); 

    const validationError = this.validateInputDate(nextBirthDay);
    if (validationError) {
      this.ageResult = validationError;
      clearInterval(this.intervalId);
      return;
    }
  
    this.ageResult = this.dateUtils.calculateBirthdayCountDown(nextBirthDay);
    
    this.intervalId = setInterval(() => {
      this.calculateAge();
    }, 1000);
  }

  validateInputDate(inputDate: Date): string | null {
    const currentDate = new Date();

    if (isNaN(inputDate.getTime())) {
      return 'Invalid date';
    }

    // if (inputDate.getTime() < currentDate.getTime()) {
    //   return 'Date of birth cannot be in the future';
    // }
    
    if (isNaN(this.year) || this.year < 0 || this.year.toString().length !== 4) {
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
