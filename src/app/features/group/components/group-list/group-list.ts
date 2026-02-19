import { Component, inject, OnInit, signal } from '@angular/core';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { GroupModalService } from '../../services/group-modal.service';
import { GroupService } from '../../services/group.service';
import { GroupInterface } from '../../types/group.type';
import { GroupCard } from '../group-card/group-card';

@Component({
  selector: 'app-group-list',
  imports: [GroupCard],
  templateUrl: './group-list.html',
  styleUrl: './group-list.scss',
})
export class GroupList implements OnInit {

  private groupService = inject(GroupService);
  private groupModalService = inject(GroupModalService);
  private notificationService = inject(NotificationService);


  public groupList = signal<GroupInterface[]>([]);


  ngOnInit(): void {
    this.loadList();
  }

  loadList() {
    this.groupService.getGroups().subscribe({
      next: (response) => {
        this.groupList.set(response)
        console.log('Grupos:', this.groupList)
      }, error: () => {

      }
    })
  }


}
