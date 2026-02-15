import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  message = signal<{ text: string, type: 'success' | 'error' } | null>(null);

  showSuccess(text: string) {
    this.message.set({ text, type: 'success' });
    this.clear();
  }

  showError(text: string) {
    this.message.set({ text, type: 'error' });
    this.clear();
  }

  clearManual() {
    this.message.set(null);
  }

  private clear() {
    setTimeout(() => this.message.set(null), 5000);
  }


}
