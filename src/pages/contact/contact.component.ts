import { Component } from '@angular/core';

interface IContact {
  id: number;
  field: string;
  name: string;
  url: string;
  image: string;
}
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  protected contacts: IContact[] = [
    {
      id: 2,
      field: 'LINKEDIN',
      name: 'linkedin.com/in/ianannoh',
      url: 'https://www.linkedin.com/in/ian-annoh-a274b1351?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      image: '/assets/contact/linkedin.svg',
    },
    {
      id: 3,
      field: 'INSTAGRAM',
      name: '@ianannoh',
      url: 'https://www.instagram.com/ianannoh/',
      image: '/assets/contact/instagram.svg',
    },
  ];
}
