import { inject, Injectable } from '@angular/core';
import { LoginInterface } from '../types/login.type';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../types/auth-response.type';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private readonly ApiUrl = `${environment.ApiUrl}/auth`;

  private http = inject(HttpClient);

  public login(body: LoginInterface): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.ApiUrl}/login`, body);
  };

}
