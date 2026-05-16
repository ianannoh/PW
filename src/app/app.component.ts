import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {SideBarComponent} from '../core/side-bar/side-bar.component';
import {ViewportScroller} from '@angular/common';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-website';

  constructor( private router: Router, private viewportScroller: ViewportScroller, private activatedRoute: ActivatedRoute ) {}

  ngOnInit():void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
        let route = this.activatedRoute;
        while (route.firstChild) route = route.firstChild;
      });
  }
}
