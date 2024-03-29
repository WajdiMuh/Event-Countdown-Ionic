import { Component, OnInit } from '@angular/core';
import { Event } from '../../classes/Event';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { EventsService } from '../../events.service';
import * as moment from 'moment';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.page.html',
  styleUrls: ['./eventlist.page.scss'],
})
export class EventlistPage implements OnInit {
  finishedloading:Boolean = false;
  eventlist:Event[] = [];
  constructor(public alertController: AlertController, public toastController: ToastController ,private eventservice:EventsService, public platform: Platform, private router: Router) { }

  ngOnInit() {
    this.eventservice.getAllEvents().subscribe(result => {
      this.eventlist = result;
      this.finishedloading = true;
    },error => {
      this.finishedloading = true;
    });
  }

  refresh(event){
    this.eventservice.getAllEvents().subscribe(result => {
      this.eventlist = result;
      event.target.complete();
    },error => {
      event.target.complete();
    });
  }

  eventclick(event:Event){
    this.router.navigate(['/countdown', event]);
  }

  delete(event:Event){
    this.finishedloading = false;
    this.eventservice.deleteEvent(event).subscribe(result => {
      this.finishedloading = true;
      this.eventlist = result;
    },error => {
      this.finishedloading = true;
    });
  }

  async edit(event:Event){
    const alert = await this.alertController.create({
      cssClass: '',
      header: 'Edit Event',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Title',
          value: event.title
        },
        {
          name: 'date',
          type: 'datetime-local',
          min: moment().format("yyyy-MM-DD") + "T00:00:00",
          value: moment(event.date).format("yyyy-MM-DDTHH:mm:ss.SSS")
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Edit',
          handler: async (inputs) => {
            if(inputs.title == "" || inputs.date == ""){
              const toast = await this.toastController.create({
                message: 'Either the title or date is not set',
                duration: 2000
              });
              toast.present();
              return false;
            }else if(moment(inputs.date).isBefore(moment())){
              const toast = await this.toastController.create({
                message: 'The date is in the past',
                duration: 2000
              });
              toast.present();
              return false;
            }else{
              this.finishedloading = false;
              this.eventservice.editEvent(event,inputs.title,moment(inputs.date).format("yyyy-MM-DDTHH:mm:ssZ")).subscribe(result => {
                this.finishedloading = true;
                this.eventlist = result;
              },error => {
                this.finishedloading = true;
              });
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async add(){
    const alert = await this.alertController.create({
      cssClass: '',
      header: 'Add Event',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Title'
        },
        {
          name: 'date',
          type: 'datetime-local',
          min: moment().format("yyyy-MM-DD") + "T00:00:00",
          value: moment().format("yyyy-MM-DDTHH:mm:ss.SSS")
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Add',
          handler: async (inputs) => {
            if(inputs.title == "" || inputs.date == ""){
              const toast = await this.toastController.create({
                message: 'Either the title or date is not set',
                duration: 2000
              });
              toast.present();
              return false;
            }else if(moment(inputs.date).isBefore(moment())){
              const toast = await this.toastController.create({
                message: 'The date is in the past',
                duration: 2000
              });
              toast.present();
              return false;
            }else{
              this.finishedloading = false;
              this.eventservice.addEvent(inputs.title,moment(inputs.date).format("yyyy-MM-DDTHH:mm:ssZ")).subscribe(result => {
                this.finishedloading = true;
                this.eventlist = result;
              },error => {
                this.finishedloading = true;
              });
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
