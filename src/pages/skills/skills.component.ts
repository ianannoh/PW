import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface ISkills {
  img: string;
  name: string;
  type: string;
}
@Component({
  selector: 'app-skills',
  imports: [
    NgForOf
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  protected skills: ISkills[] = [
    {
      img: "/assets/skills/angular-icon.webp",
      name: "Angular",
      type: "Frontend Framework",
    },
    {
      img: "/assets/skills/react-icon.png",
      name: "React",
      type: "Frontend Framework",
    },
    {
      img: "/assets/skills/node-icon.png",
      name: "NodeJS",
      type: "JavaScript Runtime Environment",
    },
    {
      img: "/assets/skills/express-icon.png",
      name: "Express",
      type: "Backend Framework",
    },
    {
      img: "/assets/skills/mongodb-icon.svg",
      name: "MongoDB",
      type: "Database",
    },
    {
      img: "/assets/skills/mysql-icon.svg",
      name: "MySQL",
      type: "Database",
    },
    {
      img: "/assets/skills/bootstrap-icon.png",
      name: "Bootstrap",
      type: "CSS Library",
    },
    {
      img: "/assets/skills/css-icon.png",
      name: "CSS",
      type: "Stylesheet Language",
    },
  ];
}
