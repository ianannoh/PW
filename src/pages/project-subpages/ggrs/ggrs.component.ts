import { Component } from '@angular/core';
import {SliderComponent} from '../../../shared/slider/slider.component';

@Component({
  selector: 'app-ggrs',
  imports: [
    SliderComponent
  ],
  templateUrl: './ggrs.component.html',
  styleUrl: './ggrs.component.css'
})
export class GgrsComponent {
  protected images: string[] = [
    '/assets/home/ggrs-bg.webp',
    '/assets/home/ggrs-2.png',
    '/assets/home/ggrs-3.png',
    '/assets/home/ggrs-4.png',
    '/assets/home/ggrs-5.png',
    '/assets/home/ggrs-6.png',
    '/assets/home/ggrs-7.png',
  ];
}
