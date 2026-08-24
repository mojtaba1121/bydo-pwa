import { Injectable, signal } from '@angular/core';
import { SubscriberAuthResponse } from './auth.models';

@Injectable({ providedIn: 'root' })
export class AuthSessionService {
  private readonly authState = signal<SubscriberAuthResponse | null>(null);

  readonly current = this.authState.asReadonly();

  setSession(auth: SubscriberAuthResponse) {
    this.authState.set(auth);
  }

  clearSession() {
    this.authState.set(null);
  }
}
