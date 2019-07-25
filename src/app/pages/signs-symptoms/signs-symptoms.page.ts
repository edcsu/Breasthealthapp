import { Component, OnInit } from '@angular/core';

import {  NavController } from '@ionic/angular';

@Component({
  selector: 'app-signs-symptoms',
  templateUrl: './signs-symptoms.page.html',
  styleUrls: ['./signs-symptoms.page.scss'],
})
export class SignsSymptomsPage implements OnInit {

  constructor( public navCtrl: NavController ) { }

  ngOnInit() {
  }

  goToWomenSigns() {
    this.navCtrl.navigateForward('/women');
  }

  goToMenSigns() {
    this.navCtrl.navigateForward('/men');
  }

  goToChildrenSigns() {
    this.navCtrl.navigateForward('/children');
  }

}
