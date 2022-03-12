import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

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
  constructor() {
    LocalNotifications.requestPermissions();
  }
}
