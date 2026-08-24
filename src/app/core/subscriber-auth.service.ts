import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  ApiResponse,
  SsoStartResponse,
  SubscriberAuthResponse,
  SubscriberOtpRequest,
  SubscriberOtpRequestedResponse,
  SubscriberOtpVerifyRequest,
  SubscriberShahrManLoginRequest,
  SubscriberSsoCallbackRequest,
  SubscriberSsoStartRequest
} from './auth.models';

@Injectable({ providedIn: 'root' })
export class SubscriberAuthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.authUrl.replace(/\/+$/, '')}/subscriber-auth`;

  requestOtp(mobile: string) {
    const body: SubscriberOtpRequest = {
      brokerageCode: environment.defaultBrokerageCode,
      mobile
    };

    return this.http
      .post<ApiResponse<SubscriberOtpRequestedResponse>>(`${this.baseUrl}/otp/request`, body)
      .pipe(map((response) => unwrapResponse(response)));
  }

  verifyOtp(mobile: string, code: string) {
    const body: SubscriberOtpVerifyRequest = {
      brokerageCode: environment.defaultBrokerageCode,
      mobile,
      code
    };

    return this.http
      .post<ApiResponse<SubscriberAuthResponse>>(`${this.baseUrl}/otp/verify`, body)
      .pipe(map((response) => unwrapResponse(response)));
  }

  loginWithShahrMan(token: string) {
    const body: SubscriberShahrManLoginRequest = { token };

    return this.http
      .post<ApiResponse<SubscriberAuthResponse>>(`${this.baseUrl}/shahreman`, body)
      .pipe(map((response) => unwrapResponse(response)));
  }

  startSso(state: string) {
    const body: SubscriberSsoStartRequest = {
      brokerageCode: environment.defaultBrokerageCode,
      state
    };

    return this.http
      .post<ApiResponse<SsoStartResponse>>(`${this.baseUrl}/sso/start`, body)
      .pipe(map((response) => unwrapResponse(response)));
  }

  completeSsoCallback(username: string, refreshToken: string, state: string) {
    const body: SubscriberSsoCallbackRequest = {
      username,
      refreshToken,
      state
    };

    return this.http
      .post<ApiResponse<SubscriberAuthResponse>>(`${this.baseUrl}/sso/callback`, body)
      .pipe(map((response) => unwrapResponse(response)));
  }
}

function unwrapResponse<T>(response: ApiResponse<T>): T {
  if (!response.succeeded) {
    throw new Error(response.message ?? response.errors?.[0] ?? 'درخواست انجام نشد. دوباره تلاش کن.');
  }

  return response.data;
}
