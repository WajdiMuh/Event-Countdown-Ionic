import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { Event } from './classes/Event';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  baseurl:string = "https://event-countdown.onrender.com";
  constructor(private http: HttpClient) { }

  getLatestEvent(): Observable<Event> {
    return this.http.get<Event>(this.baseurl + '/getlatestevent')
    .pipe(map(event => {
      event.date = moment(event.date).toDate();
      return event;
    },
      catchError(err => {
        throw 'error ' + err;
      }) 
    ));
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseurl + '/getallevents')
    .pipe(map(events => {
      return events.map(event => {
        event.date = moment(event.date).toDate();
        return event;
      })
    },
      catchError(err => {
        throw 'error ' + err;
      }) 
    ));
  }

  deleteEvent(event:Event): Observable<Event[]> {
    return this.http.delete<Event[]>(this.baseurl + '/deleteevent/' + event.id)
    .pipe(map(events => {
      return events.map(event => {
        event.date = moment(event.date).toDate();
        return event;
      })
    },
      catchError(err => {
        throw 'error ' + err;
      }) 
    ));
  }

  addEvent(title:string,date:string): Observable<Event[]> {
    return this.http.post<Event[]>(this.baseurl + '/addevent/',{title:title,date:date})
    .pipe(map(events => {
      return events.map(event => {
        event.date = moment(event.date).toDate();
        return event;
      })
    },
      catchError(err => {
        throw 'error ' + err;
      }) 
    ));
  }

  editEvent(oldevent:Event,newtitle:string,newdate:string): Observable<Event[]> {
    return this.http.put<Event[]>(this.baseurl + '/editevent/' + oldevent.id,{title:newtitle,date:newdate})
    .pipe(map(events => {
      return events.map(event => {
        event.date = moment(event.date).toDate();
        return event;
      })
    },
      catchError(err => {
        throw 'error ' + err;
      }) 
    ));
  }
  
}
