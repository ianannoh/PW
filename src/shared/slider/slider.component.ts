import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() images: string[] = [];

  currentIndex = 0;

  protected next(): void {
    if (!this.images?.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  protected prev(): void {
    if (!this.images?.length) return;
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  protected getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
