import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roman-converter',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roman-converter.component.html',
  styleUrl: './roman-converter.component.css'
})

export class RomanConverterComponent {
  romanInput: string = '';
  result: number | null = null;
  error: string | null = null;

  convertRomanToNumber(){
    this.result = null;
    this.error = null;
    const romanInputToUpperCase = this.romanInput.toUpperCase();

    if (!this.isValidRoman(romanInputToUpperCase)) {
      this.error = 'Invalid Roman numeral';
      return;
    }
    this.result = romanToNumber(romanInputToUpperCase);
  }
  isValidRoman(roman: string): boolean {
    const romanPattern = /^(M{0,4})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    return romanPattern.test(roman);
  }
}

function romanToNumber(roman: string): number {
  const romanMap: { [key: string]: number } = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = romanMap[roman[i]];
    const next = romanMap[roman[i + 1]];

    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}