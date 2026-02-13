import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "../../../layouts/components/menu/menu";
import { TitleBar } from "../../../layouts/components/title-bar/title-bar";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Menu, TitleBar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
