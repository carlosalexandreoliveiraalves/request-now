import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GroupInviteModalService {

  private activeGroupId = signal<string | null>(null);

  openInvite(groupId: string) {
    this.activeGroupId.set(groupId);
  }

  closeInvite() {
    this.activeGroupId.set(null);
  }

  isInviteOpen(groupId: string): boolean {
    return this.activeGroupId() === groupId;
  }

}
