import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { GroupInterface } from '../types/group.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private readonly ApiUrl = environment.ApiUrl;

  private http = inject(HttpClient);

  public createGroup(body: GroupInterface): Observable<GroupInterface> {
    return this.http.post<GroupInterface>(this.ApiUrl, body);
  };

  public getGroups(): Observable<GroupInterface[]> {
    return this.http.get<GroupInterface[]>(this.ApiUrl);
  };

}
