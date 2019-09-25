import { Component, OnInit } from '@angular/core';

import { NavController, LoadingController, ToastController, PopoverController, NavParams } from '@ionic/angular';

// Get Persons info
import { Person, StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-set-profile',
  templateUrl: './set-profile.page.html',
  styleUrls: ['./set-profile.page.scss'],
})
export class SetProfilePage implements OnInit {

  myProfile: Person;
  yourDob = null;
  yourGender = null;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    private storageService: StorageService
    ) { }

  ngOnInit() {
    this.loadProfile();
  }

  closePopOver() {
    this.popoverCtrl.dismiss(this.myProfile);
  }

  loadProfile() {
    console.log(this.navParams);
    this.myProfile = this.navParams.data.Profile;
  }

  // update gender and age
  updatePerson(person: Person) {
    person.dob = this.yourDob;
    person.gender = this.yourGender;
    this.storageService.updatePerson(person).then(() => {
      console.log('updated');
    });
  }

  async saveData() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    this.updatePerson(this.myProfile);
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: 'Your Data was Saved!',
        duration: 2000,
        position: 'bottom'
      });

      toast.present();
      // this.navCtrl.navigateForward('/home-results');
    });
    this.closePopOver();
  }
}

