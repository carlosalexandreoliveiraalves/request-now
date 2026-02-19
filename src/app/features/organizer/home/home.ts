import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "../../../layouts/components/menu/menu";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Menu],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
