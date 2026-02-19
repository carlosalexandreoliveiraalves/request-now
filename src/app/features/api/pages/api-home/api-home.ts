import { Component } from '@angular/core';
import { InternalSideNav } from "../../../../layouts/components/internal-side-nav/internal-side-nav";
import { InternalHeader } from "../../../../layouts/components/internal-header/internal-header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-api-home',
  imports: [InternalSideNav, InternalHeader, RouterOutlet],
  templateUrl: './api-home.html',
  styleUrl: './api-home.scss',
})
export class ApiHome {

}
