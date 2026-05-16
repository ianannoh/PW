import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

interface IProjects {
  img1: string;
  img2: string;
  header: string;
  date: string;
  type: string;
  route: string;
}
@Component({
  selector: 'app-home',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected  websiteProjects: IProjects[] = [
    {
      img1: "/assets/home/fr-bg.webp",
      img2: "/assets/home/FR-Logo.jpg",
      header: "First Responder App Ghana",
      date: "August, 2025",
      route: "https://firstresponderapp.org/",
      type: "Health & Wellness",
    },
    {
      img1: "/assets/home/vdt-bg.webp",
      img2: "/assets/home/vdt-logo.svg",
      header: "Vandzilah Technology",
      date: "September, 2025",
      route: "https://vandzilahtechnologies.com/",
      type: "Technology",
    },
    {
      img1: "/assets/home/daas-bg.webp",
      img2: "/assets/home/vdt-logo.svg",
      header: "Development-as-a-Service (DaaS)",
      date: "September, 2025",
      route: "https://daas.vandzilahtechnologies.com/",
      type: "Software-as-a-Service",
    },
    {
      img1: "/assets/home/nurture-bg.webp",
      img2: "/assets/home/nurture-marketing-logo.jpeg",
      header: "Nurture Marketing",
      date: "March, 2026",
      route: "https://nurturemarketing.online/",
      type: "Marketing & Business Development",
    },
  ];

  protected systemProjects: IProjects[] = [
    {
      img1: "/assets/home/vitals-bg.webp",
      img2: "/assets/home/vdt-logo.svg",
      header: "Vandzilah Technology Website CMS",
      date: "April, 2026",
      route: "/projects/vdt-cms",
      type: "CMS Platform",
    },
    {
      img1: "/assets/home/ggrs-bg.webp",
      img2: "/assets/home/ggrs-logo.svg",
      header: "Ghana Gun Registry Service (GGRS)",
      date: "November, 2025",
      route: "/projects/ggrs",
      type: "Legal & Regulatory Tech",
    },
    {
      img1: "/assets/home/vitals-bg.webp",
      img2: "/assets/home/FR-Logo.jpg",
      header: "Vitals First",
      date: "December, 2025",
      route: "/projects/vitals-first",
      type: "Health & Wellness Analytics",
    },
  ]
}
