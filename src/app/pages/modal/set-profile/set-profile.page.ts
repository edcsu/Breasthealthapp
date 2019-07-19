import { Component, OnInit } from '@angular/core';

import { NavController, LoadingController, ToastController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-set-profile',
  templateUrl: './set-profile.page.html',
  styleUrls: ['./set-profile.page.scss'],
})
export class SetProfilePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController,
    public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  closePopOver() {
    this.popoverCtrl.dismiss();
  }

  async saveData() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
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
