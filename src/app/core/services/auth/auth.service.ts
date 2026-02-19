import { jwtDecode } from 'jwt-decode';
import { inject, Injectable } from '@angular/core';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private sessionService = inject(SessionService);

  public isAuthenticated(): boolean {

    const token = this.sessionService.getToken();

    if (!token) {
      return false;
    }

    try {
      const decoded: any = jwtDecode(token);

      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        this.sessionService.removeKey();
        return false;
      }

      // Token existe e não expirou
      return true;

    } catch (error) {
      //algo deu errado no token
      this.sessionService.removeKey();
      return false;
    }

  }
}
