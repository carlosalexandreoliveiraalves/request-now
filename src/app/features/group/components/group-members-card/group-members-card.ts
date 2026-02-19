import { Component, input } from '@angular/core';
import { UserInterface } from '../../../user/types/user.type';
import { UserGroupInterface } from '../../types/user-group.type';

@Component({
  selector: 'app-group-members-card',
  imports: [],
  templateUrl: './group-members-card.html',
  styleUrl: './group-members-card.scss',
})
export class GroupMembersCard {

  public member = input.required<UserGroupInterface>();


  //para pegar as iniciais

  getInitials(name: string): string {
    if (!name) return '';
    const parts = name.split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
}
