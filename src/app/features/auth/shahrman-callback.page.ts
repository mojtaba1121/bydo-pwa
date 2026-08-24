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
  templateUrl: './shahrman-callback.page.html',
  styleUrl: './shahrman-callback.page.css'
})
export class ShahrManCallbackPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly auth = inject(SubscriberAuthService);
  private readonly session = inject(AuthSessionService);

  loading = true;
  errorMessage = '';

  constructor() {
    const token = this.route.snapshot.queryParamMap.get('user')?.trim();

    if (!token) {
      this.fail('اطلاعات ورود شهر من ناقص است.');
      return;
    }

    this.auth
      .loginWithShahrMan(token)
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

  goLogin() {
    void this.router.navigateByUrl('/login');
  }

  private fail(message: string) {
    this.errorMessage = message;
    this.loading = false;
  }
}
