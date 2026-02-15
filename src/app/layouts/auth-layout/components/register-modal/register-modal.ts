import { Component, inject, signal } from '@angular/core';
import { RegisterInterface } from '../../types/register.type';
import { email, form, maxLength, minLength, pattern, required, FormField, validate } from '@angular/forms/signals';
import { RegisterService } from '../../services/register.service';
import { NotificationService } from '../../../../core/services/notification/notification.service';

@Component({
  selector: 'app-register-modal',
  imports: [FormField],
  templateUrl: './register-modal.html',
  styleUrl: './register-modal.scss',
})
export class RegisterModal {

  private registerService = inject(RegisterService);
  private notificationService = inject(NotificationService);

  registerModel = signal<RegisterInterface>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


  registerForm = form(this.registerModel, (schemaPath) => {
    required(schemaPath.name, { message: 'Nome é obrigatório' });
    minLength(schemaPath.name, 1, { message: 'Nome precisa ser maior que 1 caracter' });
    maxLength(schemaPath.name, 255, { message: 'Nome não pode exceder 255 caracteres' })

    required(schemaPath.email, { message: 'Email é obrigatório' });
    email(schemaPath.email, { message: 'O email deve ser válido' });
    maxLength(schemaPath.email, 255, { message: 'Senha não pode exceder 255 caracteres' })

    required(schemaPath.password, { message: 'Senha é obrigatória' });
    minLength(schemaPath.password, 10, { message: 'Senha deve ter pelo menos 10 caracteres' })
    maxLength(schemaPath.password, 255, { message: 'Senha não pode exceder 255 caracteres' })

    pattern(schemaPath.password, /[a-z]/, { message: 'Falta letra minúscula' });
    pattern(schemaPath.password, /[A-Z]/, { message: 'Falta letra maiúscula' });
    pattern(schemaPath.password, /[0-9]/, { message: 'Falta um número' });
    pattern(schemaPath.password, /[!@#$%^&*()-]/, { message: 'Falta um caracter especial' });
    // pattern(schemaPath.password, /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[\w!@#$%^&*()-]+$/, {message: 'Precisa de'})

    required(schemaPath.confirmPassword, { message: 'Confirmação de senha é obrigatória' });


    validate(schemaPath.confirmPassword, ({ value, valueOf }) => {
      const confirmPassword = value();
      const password = valueOf(schemaPath.password);
      if (confirmPassword !== password) {
        return {
          kind: 'passwordMismatch',
          message: 'Senhas não coincidem',
        };
      }
      return null;
    });
  });


  public async onSubmit(event: Event) {
    event.preventDefault();

    const body = this.registerModel();

    console.log("Status do submit: ", body)
    this.registerService.register(body).subscribe({
      next: (response) => {
        this.notificationService.showSuccess('Cadastrado. Verifique seu e-mail.');
      }
    })

  }


}
