import { Component, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { Event } from '../../classes/Event';
import * as moment from 'moment';
@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.page.html',
  styleUrls: ['./countdown.page.scss'],
})
export class CountdownPage implements OnInit {
  finishedloading:Boolean = true;
  latestevent:Event = {title:"majd coming to germany", date: new Date("2022-03-20T00:00:00")};
  daysleft: string = "";
  constructor() { }

  ngOnInit() {
    this.recalculate();
  }

  refresh(event:RefresherCustomEvent){
    setTimeout(() => {
      this.recalculate();
      event.target.complete();
    }, 500);
  }

  recalculate(){
    let eventdatemoment: moment.Moment = moment(this.latestevent.date);
    var ms = eventdatemoment.diff(moment());
    var d = moment.duration(ms);
    this.daysleft =  `Days: ${d.days()}, Hours: ${d.hours()}, Minutes: ${d.minutes()}, Seconds: ${d.seconds()}`;
  }

}
