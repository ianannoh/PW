import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface IProjects {
  img1: string;
  img2: string;
  header: string;
  date: string;
  type: string;
}
@Component({
  selector: 'app-home',
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected  projects: IProjects[] = [
    {
      img1: "/assets/home/fr-bg.webp",
      img2: "/assets/home/FR-Logo.jpg",
      header: "First Responder App Ghana",
      date: "August, 2025",
      type: "Health & Wellness",
    },
    {
      img1: "/assets/home/vdt-bg.webp",
      img2: "/assets/home/vdt-logo.svg",
      header: "Vandzilah Technology",
      date: "September, 2025",
      type: "Portfolio",
    },
    {
      img1: "/assets/home/daas-bg.webp",
      img2: "/assets/home/vdt-logo.svg",
      header: "Development-as-a-Service (DaaS)",
      date: "September, 2025",
      type: "Portfolio",
    },
    {
      img1: "/assets/home/ggrs-bg.webp",
      img2: "/assets/home/ggrs-logo.svg",
      header: "Ghana Gun Registry Service (GGRS)",
      date: "November, 2025",
      type: "Legal & Regulatory Tech",
    },
    {
      img1: "/assets/home/vitals-bg.webp",
      img2: "/assets/home/FR-Logo.jpg",
      header: "Vitals First",
      date: "December, 2025",
      type: "Health & Wellness Analytics",
    },
  ];
}
