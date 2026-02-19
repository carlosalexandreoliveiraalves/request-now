import { Component, inject } from '@angular/core';
import { GroupModalService } from '../../services/group-modal.service';
import { GroupModal } from '../../components/group-modal/group-modal';
import { GroupList } from "../../components/group-list/group-list";

@Component({
  selector: 'app-group-home',
  imports: [GroupModal, GroupList],
  templateUrl: './group-home.html',
  styleUrl: './group-home.scss',
})
export class GroupHome {

  protected groupModalService = inject(GroupModalService);

  openModal() {
    this.groupModalService.setModalOpen();
  }



}
