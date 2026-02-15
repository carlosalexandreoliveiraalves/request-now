import { Component } from '@angular/core';
import { LoginModal } from "../../components/login-modal/login-modal";

@Component({
  selector: 'app-login-page',
  imports: [LoginModal],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {

}
