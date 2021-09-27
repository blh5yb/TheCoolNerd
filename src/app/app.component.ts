import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'person' },
    { title: 'Projects', url: '/projects', icon: 'analytics' },
    { title: 'Skills', url: '/skills', icon: 'code-working'},
    { title: 'Contact Me', url: '/contact', icon: 'mail' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
