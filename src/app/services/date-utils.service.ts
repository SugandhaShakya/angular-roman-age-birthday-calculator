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
    let months = ageDate.getUTCMonth();
    let days = ageDate.getUTCDate() - 1;
    let hours = Math.floor((ageInSeconds / 3600) % 24);
    let minutes = Math.floor((ageInSeconds / 60) % 60);
    let seconds = Math.floor(ageInSeconds % 60);
    if (hours < 0) {
        hours += 24;
        days -= 1;
    }

    if (minutes < 0) {
        minutes += 60;
        hours -= 1;
    }

    if (seconds < 0) {
        seconds += 60;
        minutes -= 1;
    }

    if (days < 0) {
        const daysInPreviousMonth = new Date(finalDate.getFullYear(), finalDate.getMonth(), 0).getDate();
        days += daysInPreviousMonth;
        months -= 1;
    }

    return { years, months, days, hours, minutes, seconds }
  }
}
