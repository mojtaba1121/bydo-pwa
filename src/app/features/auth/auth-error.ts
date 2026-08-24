import { HttpErrorResponse } from '@angular/common/http';
import { ApiErrorResponse, ApiResponse } from '../../core/auth.models';

export function toAuthErrorMessage(error: unknown): string {
  if (!(error instanceof HttpErrorResponse)) {
    if (error instanceof Error && error.message) {
      return error.message;
    }

    return 'درخواست انجام نشد. دوباره تلاش کن.';
  }

  if (error.status === 0) {
    return 'ارتباط با سرور برقرار نشد. اینترنت یا آدرس سرویس را بررسی کن.';
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
    return body.errors[0] ?? 'اطلاعات واردشده معتبر نیست.';
  }

  if (error.status === 401 || error.status === 403) {
    return 'کد تأیید درست نیست یا منقضی شده است.';
  }

  return 'درخواست انجام نشد. دوباره تلاش کن.';
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
