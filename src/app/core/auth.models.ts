export interface ApiResponse<T> {
  succeeded: boolean;
  data: T;
  message: string | null;
  errors: string[] | null;
  traceId?: string | null;
}

export interface ApiValidationError {
  code?: string;
  message?: string;
}

export interface ApiErrorResponse {
  code?: string;
  traceId?: string;
  parameters?: Record<string, unknown> | null;
  errors?: Record<string, ApiValidationError[]> | null;
}

export interface SubscriberOtpRequest {
  brokerageCode: string;
  mobile: string;
}

export interface SubscriberOtpVerifyRequest {
  brokerageCode: string;
  mobile: string;
  code: string;
}

export interface SubscriberOtpRequestedResponse {
  requested: boolean;
}

export interface SubscriberAuthSubscriberResponse {
  id: number;
  firstName: string;
  lastName: string;
  mobile: string;
  nationalCode: string | null;
}

export interface SubscriberAuthBrokerageResponse {
  id: number;
  code: string;
  name: string;
}

export type SubscriberAuthMethod = 'OTP' | string;

export interface SubscriberAuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
  subscriber: SubscriberAuthSubscriberResponse;
  brokerage: SubscriberAuthBrokerageResponse;
  authMethod: SubscriberAuthMethod;
}
