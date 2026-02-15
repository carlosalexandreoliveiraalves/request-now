import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionService } from '../services/session/session.service';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = inject(SessionService).getToken();

  if (authToken) {
    const reqWithHeader = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });
    return next(reqWithHeader);
  }

  return next(req);
};
