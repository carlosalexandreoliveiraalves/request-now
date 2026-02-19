import { Component, inject, input } from '@angular/core';
import { GroupInterface } from '../../types/group.type';
import { DatePipe } from '@angular/common';
import { GroupManagement } from '../group-management/group-management';
import { GroupManagementModalService } from '../../services/group-management-modal.service';
import { GroupInviteModalService } from '../../services/group-invite-modal.service';
import { GroupInviteMember } from "../group-invite-member/group-invite-member";

@Component({
  selector: 'app-group-card',
  imports: [DatePipe, GroupManagement, GroupInviteMember],
  templateUrl: './group-card.html',
  styleUrl: './group-card.scss',
})
export class GroupCard {
  protected groupManagementModalService = inject(GroupManagementModalService);
  protected groupInviteModalService = inject(GroupInviteModalService);

  group = input.required<GroupInterface>();

  openManagement() {
    this.groupManagementModalService.openManagement(this.group().id!);
  };

  openInvite() {
    this.groupInviteModalService.openInvite(this.group().id!);
  };

}
