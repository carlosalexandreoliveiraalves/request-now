import { Component, inject, signal } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { GroupModalService } from '../../services/group-modal.service';
import { GroupInterface } from '../../types/group.type';
import { form, FormField, maxLength, required } from '@angular/forms/signals';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { CreateGroupInterface } from '../../types/create-group.type';

@Component({
  selector: 'app-group-modal',
  imports: [FormField],
  templateUrl: './group-modal.html',
  styleUrl: './group-modal.scss',
})
export class GroupModal {


  private groupService = inject(GroupService);
  private groupModalService = inject(GroupModalService);
  private notificationService = inject(NotificationService);

  groupModel = signal<CreateGroupInterface>({
    name: '',
    desc: ''
  });


  groupForm = form(this.groupModel, (schemaPath) => {

    required(schemaPath.name, { message: 'Nome é obrigatório' })
    maxLength(schemaPath.name, 255, { message: 'Máximo de 255 caracteres' })

    required(schemaPath.desc, { message: 'Descrição é obrigatória' })
    maxLength(schemaPath.desc, 500, { message: 'Máximo de 500 caracteres' })
  });


  onSubmit(event: Event) {
    event.preventDefault();

    const body = this.groupModel();

    this.groupService.createGroup(body).subscribe({
      next: (response) => {
        this.notificationService.showSuccess('Grupo criado');
        setTimeout(() => {
          this.groupModalService.setModalClose();
        }, 50);
      }
    })
  };


  // para cuidar do modal

  closeModal() {
    this.groupModalService.setModalClose();
  }

}
