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
    this.navCtrl.navigateRoot('/women');
  }

  goToMenSigns() {
    this.navCtrl.navigateRoot('/men');
  }

  goToChildrenSigns() {
    this.navCtrl.navigateRoot('/children');
  }

  goToNonDiagnosed() {
    this.navCtrl.navigateRoot('/non-assigned');
  }

}
