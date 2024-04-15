import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


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

  calculateAge() {
    const currentDate = new Date();
    const birthDate = new Date(this.year, this.month - 1, this.day); 

    if (isNaN(birthDate.getTime())) {
      this.ageResult = 'Invalid date';
      return;
    }

    const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
    const ageInSeconds = ageInMilliseconds/1000;

    const ageDate = new Date(ageInMilliseconds);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    const hours = Math.floor((ageInSeconds / 3600) % 24);
    const minutes = Math.floor((ageInSeconds / 60) % 60);
    const seconds = Math.floor(ageInSeconds % 60);

    this.ageResult = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    this.intervalId = setInterval(() => {
      this.updateAge();
    }, 1000);
  }
  
  updateAge() {
    const currentDate = new Date();
    const birthDate = new Date(this.year, this.month - 1, this.day); 

    if (isNaN(birthDate.getTime())) {
      this.ageResult = 'Invalid date';
      return;
    }

    const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
    const ageInSeconds = ageInMilliseconds/1000;

    const ageDate = new Date(ageInMilliseconds);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    const hours = Math.floor((ageInSeconds / 3600) % 24);
    const minutes = Math.floor((ageInSeconds / 60) % 60);
    const seconds = Math.floor(ageInSeconds % 60);

    this.ageResult = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }
}
