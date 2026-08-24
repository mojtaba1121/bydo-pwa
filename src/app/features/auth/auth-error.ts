import { HttpErrorResponse } from '@angular/common/http';
import { ApiErrorResponse, ApiResponse } from '../../core/auth.models';

type TranslateFn = (key: string) => string;

export function toAuthErrorMessage(error: unknown, t: TranslateFn = (key) => key): string {
  if (!(error instanceof HttpErrorResponse)) {
    if (error instanceof Error && error.message) {
      return error.message;
    }

    return t('authErrorGeneric');
  }

  if (error.status === 0) {
    return t('authErrorNetwork');
  }

  const body = error.error as Partial<ApiResponse<unknown>> & ApiErrorResponse & { message?: string };
  const validationMessage = firstValidationMessage(body);

  if (validationMessage) {
    return validationMessage;
  }

  if (body?.message) {
    return body.message;
  }

  if (Array.isArray(body?.errors) && body.errors.length > 0) {
    return body.errors[0] ?? t('authErrorInvalidFields');
  }

  if (error.status === 401 || error.status === 403) {
    return t('authErrorInvalidOtp');
  }

  return t('authErrorGeneric');
}

function firstValidationMessage(error: ApiErrorResponse | null | undefined): string | null {
  if (!error?.errors) {
    return null;
  }

  for (const fieldErrors of Object.values(error.errors)) {
    const message = fieldErrors.find((fieldError) => Boolean(fieldError.message))?.message;

    if (message) {
      return message;
    }
  }

  return null;
}
