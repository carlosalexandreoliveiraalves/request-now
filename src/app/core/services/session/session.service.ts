import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {

  private TOKEN_KEY = 'accessToken'

  public setToken(token: string): void {
    sessionStorage.setItem(this.TOKEN_KEY, token)
  };

  public getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  };

  public removeKey(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
  };

}
