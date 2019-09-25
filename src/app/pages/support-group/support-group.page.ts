import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Calendar } from '@ionic-native/calendar/ngx';
@Component({
  selector: 'app-support-group',
  templateUrl: './support-group.page.html',
  styleUrls: ['./support-group.page.scss'],
})

export class SupportGroupPage implements OnInit {
  startDate = new Date(2019, 8, 12, 18, 30, 0, 0); // beware: month 0 = january, 11 = december
  endDate = new Date(2019, 8, 12, 19, 30, 0, 0);
  title = 'Self check Reminder';
  eventLocation = 'Home';
  notes = 'Perform a self check.';
  success = function(message) { alert('Success: ' + JSON.stringify(message)); };
  error = function(message) { alert('Error: ' + message); };

  constructor(
    private calendar: Calendar,
    public toastCtrl: ToastController,
    ) { }

  ngOnInit() {
      // create BreastHealth calendar
      this.calendar.createCalendar('BreastHealth Calendar').then(
      (msg) => {
        console.log(msg);
      },
      (err) => {
        console.log(err);
       }
    );
  }

  /* toaster */
  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      showCloseButton: true,
      message: text,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  /* create event */
  createEvent() {
    this.calendar.createEventInteractivelyWithOptions(this.title, this.eventLocation, this.notes, this.startDate, this.endDate)
  }

}
