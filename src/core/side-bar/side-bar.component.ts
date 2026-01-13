import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'side-bar',
  imports: [
    NgIf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  showSideBar: boolean = false;
  mobileView: boolean = false;

  setSidebar(): void {
    this.showSideBar = !this.showSideBar;
  }
}
