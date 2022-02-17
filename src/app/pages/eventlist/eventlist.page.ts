import { Component, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { Event } from '../../classes/Event';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import * as moment from 'moment';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.page.html',
  styleUrls: ['./eventlist.page.scss'],
})
export class EventlistPage implements OnInit {
  finishedloading:Boolean = true;
  eventlist:Event[] = [{title:"majd coming to germany", date: new Date("2022-03-20")},{title:"test1", date: new Date("2022-04-26")}];
  constructor(public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
  }

  refresh(event:RefresherCustomEvent){
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  delete(event:Event){
    this.eventlist.splice(this.eventlist.indexOf(event), 1);
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
              this.eventlist.push({title: inputs.title, date: moment(inputs.date).toDate()});
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
