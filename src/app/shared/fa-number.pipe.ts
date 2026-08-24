import { inject, Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../core/preferences.service';

const PERSIAN_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
const ARABIC_DIGITS = '٠١٢٣٤٥٦٧٨٩';

@Pipe({ name: 'faNumber', standalone: true, pure: false })
export class FaNumberPipe implements PipeTransform {
  private readonly language = inject(LanguageService);

  transform(value: string | number | null | undefined): string {
    if (value === null || value === undefined) {
      return '';
    }

    const normalized = String(value)
      .replace(/\d/g, (digit) => PERSIAN_DIGITS[Number(digit)])
      .replace(/[٠-٩]/g, (digit) => PERSIAN_DIGITS[ARABIC_DIGITS.indexOf(digit)]);

    if (this.language.language() === 'fa') {
      return normalized;
    }

    return normalized
      .replace(/[۰-۹]/g, (digit) => String(PERSIAN_DIGITS.indexOf(digit)))
      .replace(/٫/g, '.')
      .replace(/٬/g, ',');
  }
}
