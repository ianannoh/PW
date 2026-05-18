import { Component } from '@angular/core';
import {SliderComponent} from '../../../shared/slider/slider.component';

@Component({
  selector: 'app-vdt-cms',
  imports: [
    SliderComponent
  ],
  templateUrl: './vdt-cms.component.html',
  styleUrl: './vdt-cms.component.css'
})
export class VdtCmsComponent {
    protected images: string[] = [
      '/assets/home/VDT-CMS-1.png',
      '/assets/home/VDT-CMS-2.png',
      '/assets/home/VDT-CMS-3.png',
      '/assets/home/VDT-CMS-4.png',
    ];
}
