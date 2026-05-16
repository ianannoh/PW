import { Routes } from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {AboutComponent} from '../pages/about/about.component';
import {SkillsComponent} from '../pages/skills/skills.component';
import {ContactComponent} from '../pages/contact/contact.component';
import {GgrsComponent} from '../pages/project-subpages/ggrs/ggrs.component';
import {VdtCmsComponent} from '../pages/project-subpages/vdt-cms/vdt-cms.component';
import {VitalsFirstComponent} from '../pages/project-subpages/vitals-first/vitals-first.component';

export const routes: Routes = [
  { path: '', component: AboutComponent, title: 'About | Ian Annoh' },
  { path: 'professional-skills', component: SkillsComponent, title: 'Professional Skills | Ian Annoh' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Ian Annoh' },
  { path: 'projects', component: HomeComponent, title: 'Projects | Ian Annoh' },
  { path: 'projects/ggrs', component: GgrsComponent },
  { path: 'projects/vdt-cms', component: VdtCmsComponent },
  { path: 'projects/vitals-first', component: VitalsFirstComponent },
];
