import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../types/role.type';
import { UserGroupInterface } from '../types/user-group.type';

@Injectable({
  providedIn: 'root',
})
export class GroupManagementService {

  private ApiUrl = `${environment.ApiUrl}/user-group`;

  private http = inject(HttpClient);

  public inviteUserToGroup(groupId: string, email: string, role: Role): Observable<boolean> {
    return this.http.post<boolean>(`${this.ApiUrl}/group/${groupId}/invite`, { email, role });
  }

  /**
   * @Post('/confirm-invitation')
   * Confirma a entrada no grupo via token recebido por e-mail
   */
  public confirmInvitation(token: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.ApiUrl}/confirm-invitation`, { token });
  }

  /**
   * @Get('/group/{groupId}/users')
   * Lista todos os usuários de um grupo específico
   */
  public getUsersInGroups(groupId: string): Observable<UserGroupInterface[]> {
    return this.http.get<UserGroupInterface[]>(`${this.ApiUrl}/group/${groupId}/users`);
  };

  /**
   * @Patch('/group/{groupId}/member/{targetUserId}/role')
   * Atualiza o cargo de um membro (Apenas ADMIN ou OWNER)
   */
  public updateUserGroupRole(groupId: string, targetUserId: string, role: Role): Observable<boolean> {
    return this.http.patch<boolean>(`${this.ApiUrl}/group/${groupId}/member/${targetUserId}/role`, { role });
  }

  /**
   * @Delete('/group/{groupId}/leave')
   * Sai do grupo ou cancela um convite pendente
   */
  public leaveGroup(groupId: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.ApiUrl}/group/${groupId}/leave`);
  }
}
