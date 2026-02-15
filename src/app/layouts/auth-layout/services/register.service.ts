import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { RegisterInterface } from '../types/register.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RegisterResponse } from '../types/register-response.type';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly ApiUrl = `${environment.ApiUrl}/auth`;

  private http = inject(HttpClient);

  public register(body: RegisterInterface): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.ApiUrl}/register`, body);
  };

  

}
