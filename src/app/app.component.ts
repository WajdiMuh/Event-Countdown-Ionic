import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Countdown', url: '/countdown'},
    { title: 'Event List', url: '/eventlist' }
  ];
  constructor() {}
}
