import { Component, inject, signal } from '@angular/core';
import { LoginInterface } from '../../types/login.type';
import { form, FormField, required } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { SessionService } from '../../../../core/services/session/session.service';

@Component({
  selector: 'app-login-modal',
  imports: [FormField],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.scss',
})
export class LoginModal {

  private loginService = inject(LoginService);
  private notificationService = inject(NotificationService);
  private sessionService = inject(SessionService);
  private router = inject(Router)

  loginModel = signal<LoginInterface>({
    email: '',
    password: ''
  });


  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email é obrigatório' });
    required(schemaPath.password, { message: 'Senha é obrigatória' });
  });


  public async onSubmit(event: Event) {
    event.preventDefault();

    const body = this.loginModel();

    this.loginService.login(body).subscribe({
      next: (response) => {
        this.sessionService.setToken(response.token);
        this.notificationService.showSuccess('Logado com sucesso.');
        this.router.navigate(['/home']);
      }
    });
  };

}
