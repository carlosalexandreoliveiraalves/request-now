import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GroupManagementModalService {
  private activeGroupId = signal<string | null>(null);
  
  openManagement(groupId: string) {
    this.activeGroupId.set(groupId);
  }

  closeManagement() {
    this.activeGroupId.set(null);
  }

  isManagementOpen(groupId: string): boolean {
    return this.activeGroupId() === groupId;
  }


}
