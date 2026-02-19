import { Component, inject, input, signal } from '@angular/core';
import { GroupInterface } from '../../types/group.type';
import { Role } from '../../types/role.type';
import { email, form, FormField, required } from '@angular/forms/signals';
import { GroupInviteModalService } from '../../services/group-invite-modal.service';
import { GroupService } from '../../services/group.service';
import { GroupManagementService } from '../../services/group-management.service';
import { NotificationService } from '../../../../core/services/notification/notification.service';

@Component({
  selector: 'app-group-invite-member',
  imports: [FormField],
  templateUrl: './group-invite-member.html',
  styleUrl: './group-invite-member.scss',
})
export class GroupInviteMember {

  protected groupInviteModalService = inject(GroupInviteModalService);
  private groupManagementService = inject(GroupManagementService);
  private notificationService = inject(NotificationService);

  group = input.required<GroupInterface>();

  groupModel = signal<{ email: string, role: Role }>({ email: '', role: Role.VIEWER });

  groupForm = form(this.groupModel, (shcemaPath) => {
    required(shcemaPath.email, { message: 'O email é obrigatório.' });
    email(shcemaPath.email, { message: 'O email deve ser válido.' });

    required(shcemaPath.role, { message: 'O papel é obrigatório.' });
  });

  onSubmit(event: Event) {
    event.preventDefault();

    const body = this.groupModel();
    console.log(body);
    if(!this.group().id) {
      this.notificationService.showError('O grupo não está definido.');
      return;
    }

    if (this.groupForm().valid()) {
      this.groupManagementService.inviteUserToGroup(this.group().id!, body.email, body.role).subscribe({
        next: () => {
          this.notificationService.showSuccess('Convite enviado com sucesso');
          this.closeInvite();
        }
      })
    }
  };

  protected closeInvite() {
    this.groupInviteModalService.closeInvite();
  }
}
