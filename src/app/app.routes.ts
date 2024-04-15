import { Routes } from '@angular/router';
import { RomanConverterComponent } from './roman-converter/roman-converter.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { BirthdayCountdownComponent } from './birthday-countdown/birthday-countdown.component';

export const routes: Routes = [
    { path:'roman_converter', component: RomanConverterComponent},
    { path:'age_calculator', component: AgeCalculatorComponent},
    { path:'birthday_countdown', component: BirthdayCountdownComponent},
];
