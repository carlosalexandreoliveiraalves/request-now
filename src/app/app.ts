import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Notification } from "./shared/components/notification/notification/notification";
import { TitleBar } from "./layouts/components/title-bar/title-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Notification, TitleBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('request-now-app');
}
