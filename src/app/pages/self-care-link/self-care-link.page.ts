import { Component, OnInit } from '@angular/core';

import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';

@Component({
  selector: 'app-self-care-link',
  templateUrl: './self-care-link.page.html',
  styleUrls: ['./self-care-link.page.scss'],
})
export class SelfCareLinkPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {

  }

  ngOnInit() {
  }

  // go to SelfCheck page
  goToSelfCheck() {
    this.navCtrl.navigateRoot('/self-check');
  }

  goToTips() {
    this.navCtrl.navigateRoot('/tips');
  }

  goToBreastHealthInfo() {
    this.navCtrl.navigateRoot('/breast-health-info');
  }

  goToSupportGroup() {
    this.navCtrl.navigateRoot('/support-group');
  }

  goToSpecialist() {
    this.navCtrl.navigateRoot('/specialist');
  }


}
