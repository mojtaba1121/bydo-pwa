import { Pipe, PipeTransform } from '@angular/core';

const PERSIAN_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
const ARABIC_DIGITS = '٠١٢٣٤٥٦٧٨٩';

@Pipe({ name: 'faNumber', standalone: true })
export class FaNumberPipe implements PipeTransform {
  transform(value: string | number | null | undefined): string {
    if (value === null || value === undefined) {
      return '';
    }

    return String(value)
      .replace(/\d/g, (digit) => PERSIAN_DIGITS[Number(digit)])
      .replace(/[٠-٩]/g, (digit) => PERSIAN_DIGITS[ARABIC_DIGITS.indexOf(digit)]);
  }
}
