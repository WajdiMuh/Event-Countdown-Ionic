import { Component, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { Event } from '../../classes/Event';
import * as moment from 'moment';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.page.html',
  styleUrls: ['./countdown.page.scss'],
})
export class CountdownPage implements OnInit {
  finishedloading:Boolean = false;
  latestevent:Event = undefined;
  daysleft: string = "";
  constructor(private eventservice:EventsService ) { }

  ngOnInit() {
    this.eventservice.getLatestEvent().subscribe(result => {
      this.latestevent = result;
      this.recalculate();
      this.finishedloading = true;
    },error => {
      this.finishedloading = true;
    });
  }

  refresh(event:RefresherCustomEvent){
    this.eventservice.getLatestEvent().subscribe(result => {
      this.latestevent = result;
      this.recalculate();
      event.target.complete();
    },error => {
      event.target.complete();
    });
  }

  recalculate(){
    let eventdatemoment: moment.Moment = moment(this.latestevent.date);
    var ms = eventdatemoment.diff(moment());
    var d = moment.duration(ms);
    this.daysleft =  `Days: ${d.days()}, Hours: ${d.hours()}, Minutes: ${d.minutes()}, Seconds: ${d.seconds()}`;
  }

}
