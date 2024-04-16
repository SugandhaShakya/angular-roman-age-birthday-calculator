import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {

  constructor() { }

  
  public calculateAge(birthDate: Date): string {
    const currentDate = new Date();
    const { years, months, days, hours, minutes, seconds} = this.calculateDateDifference(birthDate, currentDate);
    return `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }

  public calculateBirthdayCountDown(nextBirthDay: Date): string {
    const currentDate = new Date();
    const { years, months, days, hours, minutes, seconds} = this.calculateDateDifference(currentDate, nextBirthDay);
    return `${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  } 
  
  private calculateDateDifference(initialDate: Date, finalDate: Date) {
    const ageInMilliseconds = finalDate.getTime() - initialDate.getTime();
    const ageInSeconds = ageInMilliseconds/1000;

    const ageDate = new Date(ageInMilliseconds);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    const hours = Math.floor((ageInSeconds / 3600) % 24);
    const minutes = Math.floor((ageInSeconds / 60) % 60);
    const seconds = Math.floor(ageInSeconds % 60);

    return { years, months, days, hours, minutes, seconds }
  }
}
