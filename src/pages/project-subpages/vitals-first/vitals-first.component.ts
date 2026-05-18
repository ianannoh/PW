import { Component } from '@angular/core';
import {SliderComponent} from '../../../shared/slider/slider.component';

@Component({
  selector: 'app-vitals-first',
  imports: [
    SliderComponent
  ],
  templateUrl: './vitals-first.component.html',
  styleUrl: './vitals-first.component.css'
})
export class VitalsFirstComponent {
  protected images: string[] = [
    '/assets/home/vitals-1.png',
    '/assets/home/vitals-bg.webp',
  //   '/assets/home/VDT-CMS-3.png',
  //   '/assets/home/VDT-CMS-4.png',
  ];
}
