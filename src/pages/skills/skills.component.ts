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
  protected languages: ISkills[] = [
    {
      img: "/assets/skills/typeScript-logo.svg",
      name: "TypeScript",
      type: "Programming Language",
    },
    {
      img: "/assets/skills/js-logo.png",
      name: "JavaScript",
      type: "Programming Language",
    },
    {
      img: "/assets/skills/java.svg",
      name: "Java",
      type: "Programming Language",
    },
    {
      img: "/assets/skills/sql.svg",
      name: "SQL",
      type: "Programming Language",
    },
  ];

  protected frontend: ISkills[] = [
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
      img: "/assets/skills/bootstrap-icon.png",
      name: "Bootstrap",
      type: "CSS Library",
    },
  ];

  protected backend: ISkills[] = [
    {
      img: "/assets/skills/node-icon.png",
      name: "NodeJS",
      type: "JS Runtime Environment",
    },
    {
      img: "/assets/skills/express-icon.png",
      name: "Express",
      type: "Backend Framework",
    }
  ];

  protected database: ISkills[] = [
    {
      img: "/assets/skills/mongodb-icon.svg",
      name: "MongoDB",
      type: "Database",
    },
    {
      img: "/assets/skills/mysql-icon.svg",
      name: "MySQL",
      type: "Database",
    }
  ];

  protected practices: ISkills[] = [
    {
      img: "/assets/skills/agile.svg",
      name: "Agile",
      type: "",
    },
    {
      img: "/assets/skills/ci-cd.svg",
      name: "CI/CD",
      type: "",
    },
    {
      img: "/assets/skills/git.svg",
      name: "Git",
      type: "",
    }
  ];


}
