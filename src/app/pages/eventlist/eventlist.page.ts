import { Component, OnInit } from '@angular/core';
import { Event } from '../../classes/Event';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { EventsService } from '../../events.service';
import * as moment from 'moment';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.page.html',
  styleUrls: ['./eventlist.page.scss'],
})
export class EventlistPage implements OnInit {
  finishedloading:Boolean = false;
  eventlist:Event[] = [];
  constructor(public alertController: AlertController, public toastController: ToastController ,private eventservice:EventsService, public platform: Platform) { }

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

  delete(event:Event){
    this.finishedloading = false;
    this.eventservice.deleteEvent(event).subscribe(result => {
      this.finishedloading = true;
      this.eventlist = result;
    },error => {
      this.finishedloading = true;
    });
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
          value: moment().add(1, 'days').format("yyyy-MM-DDTHH:mm:ss.SSS")
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
            }else if(moment(inputs.date).isBefore(moment())){
              const toast = await this.toastController.create({
                message: 'The date is in the past',
                duration: 2000
              });
              toast.present();
            }else{
              this.finishedloading = false;
              this.eventservice.addEvent(inputs.title,moment(inputs.date).format("yyyy-MM-DDTHH:mm:ss.SSS")).subscribe(result => {
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
