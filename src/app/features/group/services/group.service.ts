import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { GroupInterface } from '../types/group.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreateGroupInterface } from '../types/create-group.type';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private readonly ApiUrl = `${environment.ApiUrl}/group`;

  private http = inject(HttpClient);

  public createGroup(body: CreateGroupInterface): Observable<GroupInterface> {
    return this.http.post<GroupInterface>(this.ApiUrl, body);
  };

  public getGroups(): Observable<GroupInterface[]> {
    return this.http.get<GroupInterface[]>(`${this.ApiUrl}/my-groups`);
  };

}
