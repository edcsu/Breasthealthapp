import { Component, OnInit } from '@angular/core';

import {  NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.page.html',
  styleUrls: ['./risk-assessment.page.scss'],
})
export class RiskAssessmentPage implements OnInit {

  constructor( public navCtrl: NavController,
               public modalCtrl: ModalController,
  ) { }

  ngOnInit() {

  }

}
