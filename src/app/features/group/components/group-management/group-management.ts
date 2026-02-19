import { Component, inject, input } from '@angular/core';
import { GroupInterface } from '../../types/group.type';
import { DatePipe } from '@angular/common';
import { GroupManagementModalService } from '../../services/group-management-modal.service';
import { GroupMembersList } from "../group-members-list/group-members-list";

@Component({
  selector: 'app-group-management',
  imports: [GroupMembersList],
  templateUrl: './group-management.html',
  styleUrl: './group-management.scss',
})
export class GroupManagement {

  protected groupManagementModalService = inject(GroupManagementModalService);

  group = input.required<GroupInterface>();


  closeManagement() {
    this.groupManagementModalService.closeManagement();
  }

}
