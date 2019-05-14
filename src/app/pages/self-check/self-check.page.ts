import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-self-check',
  templateUrl: './self-check.page.html',
  styleUrls: ['./self-check.page.scss'],
})
export class SelfCheckPage implements OnInit {

  constructor(
  	public navCtrl: NavController) {

  	}

  ngOnInit() {
  }

  slider = [
  	{
  		title:'Step 1',
  		content:'Hold arms at your side.',
  		img:'assets/illustrations/Picture1.jpg'
  	},
  	{
  		title:'Step 2',
  		content:'Hold arms at your side.',
  		img:'assets/illustrations/Picture2.jpg'
  	},
  	{
  		title:'Step 3',
  		content:'Press your hands on your hips and tighten your chest muscles',
  		img:'assets/illustrations/Picture3.jpg'
  	},
  	{
  		title:'Step 4',
  		content:'some staff to read here',
  		img:'assets/illustrations/Picture4.jpg'
  	},
  	{
  		title:'Step 5',
  		content:'Check is Complete',
  		img:'assets/backgrounds/bg (12).jpg'
  	}
  ];

}
