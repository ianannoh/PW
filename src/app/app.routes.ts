import { Routes } from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {AboutComponent} from '../pages/about/about.component';
import {SkillsComponent} from '../pages/skills/skills.component';
import {ContactComponent} from '../pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: AboutComponent, title: 'About | Ian Annoh' },
  { path: 'professional-skills', component: SkillsComponent, title: 'Professional Skills | Ian Annoh' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Ian Annoh' },
  { path: 'projects', component: HomeComponent, title: 'Projects | Ian Annoh' },
];
