import { Component } from '@angular/core';
import { InternalSideNav } from "../internal-side-nav/internal-side-nav";
import { InternalHeader } from "../internal-header/internal-header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-internal-organizer',
  imports: [InternalSideNav, InternalHeader, RouterOutlet],
  templateUrl: './internal-organizer.html',
  styleUrl: './internal-organizer.scss',
})
export class InternalOrganizer {

}
