import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'side-bar',
  imports: [
    NgIf
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  showSideBar: boolean = false;

  setSidebar(): void {
    this.showSideBar = !this.showSideBar;
  }
}
