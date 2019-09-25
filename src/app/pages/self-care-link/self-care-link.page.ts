import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
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
    private router: Router,
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
    this.router.navigate(['self-check']);
  }

  goToTips() {
    this.router.navigate(['tips']);
  }

  goToBreastHealthInfo() {
    this.router.navigate(['breast-health-info']);
  }

  goToSupportGroup() {
    this.router.navigate(['support-group']);
  }

  goToSpecialist() {
    this.router.navigate(['specialist']);
  }


}
