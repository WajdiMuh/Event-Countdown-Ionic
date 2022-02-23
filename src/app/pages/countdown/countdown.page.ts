import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event } from '../../classes/Event';
import * as moment from 'moment';
import { EventsService } from '../../events.service';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.page.html',
  styleUrls: ['./countdown.page.scss'],
})
export class CountdownPage implements OnInit,OnDestroy {
  finishedloading:Boolean = false;
  latestevent:Event = undefined;
  receivedevent:Event = undefined;
  daysleft: string = "";
  subscription: Subscription;
  constructor(private eventservice:EventsService,private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params.id == undefined){
        this.eventservice.getLatestEvent().subscribe(result => {
          this.subscription = interval(1000).subscribe(x => {
              this.recalculate();
          });
          this.latestevent = result;
          this.recalculate();
          this.finishedloading = true;
        },error => {
          this.finishedloading = true;
        });
      }else{
        this.subscription = interval(1000).subscribe(x => {
          this.recalculate();
        });
        this.latestevent = {id:parseInt(params.id),title:params.title, date: new Date(params.date)};
        this.receivedevent = this.latestevent;
        this.recalculate();
        this.finishedloading = true;
      }
    });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  refresh(event){
    if(this.receivedevent == undefined){
      this.eventservice.getLatestEvent().subscribe(result => {
        this.latestevent = result;
        this.recalculate();
        event.target.complete();
      },error => {
        event.target.complete();
      });
    }else{
      this.latestevent = this.receivedevent;
      this.recalculate();
      event.target.complete();
    }
  }

  recalculate(){
    let eventdatemoment: moment.Moment = moment(this.latestevent.date);
    var ms = eventdatemoment.diff(moment());
    var d = moment.duration(ms);
    this.daysleft =  `Years: ${d.years()}, Months: ${d.months()}, Days: ${d.days()}, Hours: ${d.hours()}, Minutes: ${d.minutes()}, Seconds: ${d.seconds()}`;
  }

}
