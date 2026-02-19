import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfirmAccountResponse } from '../types/confirm-account-response.type';

@Injectable({
  providedIn: 'root',
})
export class ConfirmAccountService {
  
  private ApiUrl = `${environment.ApiUrl}/auth`;
  private http = inject(HttpClient);


  public confirmAccount(body: { token: string }) : Observable<ConfirmAccountResponse> {
    return this.http.post<ConfirmAccountResponse>(`${this.ApiUrl}/confirm-account`, body);
  };
  

}
