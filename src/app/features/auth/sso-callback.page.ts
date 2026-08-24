import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { LucideAngularModule } from 'lucide-angular';
import { AuthSessionService } from '../../core/auth-session.service';
import { SubscriberAuthService } from '../../core/subscriber-auth.service';
import { BrandComponent } from '../../shared/ui';
import { toAuthErrorMessage } from './auth-error';

@Component({
  standalone: true,
  imports: [BrandComponent, LucideAngularModule],
  templateUrl: './sso-callback.page.html',
  styleUrl: './sso-callback.page.css'
})
export class SsoCallbackPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly auth = inject(SubscriberAuthService);
  private readonly session = inject(AuthSessionService);

  loading = true;
  errorMessage = '';

  constructor() {
    const username = this.route.snapshot.queryParamMap.get('username')?.trim();
    const refreshToken = this.route.snapshot.queryParamMap.get('refreshToken')?.trim();
    const state = this.route.snapshot.queryParamMap.get('state')?.trim();
    const expectedState = sessionStorage.getItem('bydo.sso.state');

    if (!username || !refreshToken || !state) {
      this.fail('اطلاعات بازگشتی ورود یکپارچه ناقص است.');
      return;
    }

    if (expectedState && state !== expectedState) {
      this.fail('درخواست ورود یکپارچه معتبر نیست. دوباره از صفحه ورود اقدام کن.');
      return;
    }

    this.auth
      .completeSsoCallback(username, refreshToken, state)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (auth) => {
          sessionStorage.removeItem('bydo.sso.state');
          this.session.setSession(auth);
          void this.router.navigateByUrl('/map');
        },
        error: (error: unknown) => {
          this.errorMessage = toAuthErrorMessage(error);
        }
      });
  }

  goLogin() {
    void this.router.navigateByUrl('/login');
  }

  private fail(message: string) {
    this.errorMessage = message;
    this.loading = false;
  }
}
