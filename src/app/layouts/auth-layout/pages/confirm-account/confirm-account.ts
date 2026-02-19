import { Component, inject, OnInit, signal } from '@angular/core';
import { ConfirmAccountService } from '../../services/confirm-account.service';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirm-account',
  imports: [RouterLink],
  templateUrl: './confirm-account.html',
  styleUrl: './confirm-account.scss',
})
export class ConfirmAccount implements OnInit {

  private route = inject(ActivatedRoute);
  private confirmAccountService = inject(ConfirmAccountService);
  private notifcationService = inject(NotificationService);
  private router = inject(Router)

  status = signal<'loading' | 'success' | 'error'>('loading');
  message = signal<string>('Verificando sua conta...');

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');

    if (token) {
      this.onSubmit({ token });
    } else {
      this.status.set('error');
      this.message.set('Token não fornecido ou link inválido.');
    }
  };




  onSubmit(body: { token: string }) {

    this.confirmAccountService.confirmAccount(body).subscribe({
      next: (response) => {
        this.status.set('success');
        this.message.set('E-mail confirmado com sucesso! Você já pode entrar.');
        this.notifcationService.showSuccess(`${response.userEmail} verificado com sucesso. Será redirecionado...`)
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }, error: (error) => {
        this.status.set('error');
        const errorMsg = error.error?.message || 'Link expirado ou inválido.';
        this.message.set(errorMsg);
      }
    })
  }


}
