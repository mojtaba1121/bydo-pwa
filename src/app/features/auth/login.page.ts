import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { LucideAngularModule } from 'lucide-angular';
import { AuthSessionService } from '../../core/auth-session.service';
import { SubscriberAuthService } from '../../core/subscriber-auth.service';
import { BrandComponent } from '../../shared/ui';
import { toAuthErrorMessage } from './auth-error';

@Component({
  standalone: true,
  imports: [FormsModule, BrandComponent, LucideAngularModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css'
})
export class LoginPage {
  private readonly router = inject(Router);
  private readonly auth = inject(SubscriberAuthService);
  private readonly session = inject(AuthSessionService);

  step: 'mobile' | 'otp' = 'mobile';
  mobile: string = '';
  otpCode: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  get normalizedMobile() {
    return this.mobile.trim();
  }

  get normalizedOtpCode() {
    return this.otpCode.trim();
  }

  get isMobileValid() {
    return /^9\d{9}$/.test(this.normalizedMobile);
  }

  get isOtpValid() {
    return /^\d{5}$/.test(this.normalizedOtpCode);
  }

  setMobile(value: string) {
    this.mobile = toEnglishDigits(value).replace(/\D/g, '').replace(/^0/, '').slice(0, 10);
  }

  setOtpCode(value: string) {
    this.otpCode = toEnglishDigits(value).replace(/\D/g, '').slice(0, 5);
  }

  requestOtp() {
    if (!this.isMobileValid || this.loading) {
      return;
    }

    this.errorMessage = '';
    this.loading = true;

    this.auth
      .requestOtp(this.normalizedMobile)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.step = 'otp';
          this.otpCode = '';
        },
        error: (error: unknown) => {
          this.errorMessage = toAuthErrorMessage(error);
        }
      });
  }

  verifyOtp() {
    if (!this.isMobileValid || !this.isOtpValid || this.loading) {
      return;
    }

    this.errorMessage = '';
    this.loading = true;

    this.auth
      .verifyOtp(this.normalizedMobile, this.normalizedOtpCode)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (auth) => {
          this.session.setSession(auth);
          void this.router.navigateByUrl('/map');
        },
        error: (error: unknown) => {
          this.errorMessage = toAuthErrorMessage(error);
        }
      });
  }

  startSso() {
    if (this.loading) {
      return;
    }

    const state = crypto.randomUUID();

    this.errorMessage = '';
    this.loading = true;
    sessionStorage.setItem('bydo.sso.state', state);

    this.auth
      .startSso(state)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: ({ redirectUrl }) => {
          window.location.assign(redirectUrl);
        },
        error: (error: unknown) => {
          sessionStorage.removeItem('bydo.sso.state');
          this.errorMessage = toAuthErrorMessage(error);
        }
      });
  }

  editMobile() {
    this.step = 'mobile';
    this.otpCode = '';
    this.errorMessage = '';
  }
}

function toEnglishDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (digit) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit)));
}
