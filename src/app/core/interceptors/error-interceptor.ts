import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from '../services/notification/notification.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const notificationService = inject(NotificationService)

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ocorreu um erro desconhecido.';

      if (error.status === 0) {
        errorMessage = 'Sem conexão com o servidor. Verifique sua internet.';
      }

      else if (error.error) {
        if (typeof error.error === 'string') {
          errorMessage = error.error;
        } else if (error.error.message) {
          errorMessage = error.error.message;
        }
      }
      else if (error.status === 401) {
        errorMessage = 'Sessão expirada ou login inválido.';
      } else if (error.status === 403) {
        errorMessage = 'Você não tem permissão para realizar essa ação.';
      }

      notificationService.showError(errorMessage);

      return throwError(() => error);
    })
  );
};
