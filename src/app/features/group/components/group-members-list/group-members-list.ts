import { UserInterface } from './../../../user/types/user.type';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { GroupManagementService } from '../../services/group-management.service';
import { GroupMembersCard } from '../group-members-card/group-members-card';
import { UserGroupInterface } from '../../types/user-group.type';

@Component({
  selector: 'app-group-members-list',
  imports: [GroupMembersCard],
  templateUrl: './group-members-list.html',
  styleUrl: './group-members-list.scss',
})
export class GroupMembersList implements OnInit {
  public groupManagementService = inject(GroupManagementService);

  public membersList = signal<UserGroupInterface[]>([]);
  public groupId = input.required<string>();

  ngOnInit(): void {
    this.loadMembers();
  };


  loadMembers() {
    this.groupManagementService.getUsersInGroups(this.groupId()).subscribe({
      next: (response) => {
        const users = response;
        this.membersList.set(users);
      }
    });
  };

}
