import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';
  import { Router } from '@angular/router';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {

  constructor(
    private router: Router,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  goToBreastCancerTips() {
    this.router.navigate(['breast-cancer-tips']);
  }

  goToNippleTips() {
    this.router.navigate(['nipples-tips']);
  }

}
