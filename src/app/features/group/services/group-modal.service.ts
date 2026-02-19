import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GroupModalService {


  isModalOpen = signal<boolean>(false);

  setModalOpen() {
    this.isModalOpen.set(true);
  };


  setModalClose() {
    this.isModalOpen.set(false);
  }
}
