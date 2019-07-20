import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-self-check',
  templateUrl: './self-check.page.html',
  styleUrls: ['./self-check.page.scss'],
})
export class SelfCheckPage implements OnInit {

  constructor( public navCtrl: NavController) {}

  ngOnInit() {
  }

  slider = [
  	{
  		title:'Step 1',
  		content:'Step 1: Hold arms at your side.',
  		img:'assets/illustrations/Picture1.jpg'
  	},
  	{
  		title:'Step 2',
  		content:'Step 2: Hold arms at your side.',
  		img:'assets/illustrations/Picture2.jpg'
  	},
  	{
  		title:'Step 3',
  		content:'Step 3: Press your hands on your hips and tighten your chest muscles',
  		img:'assets/illustrations/Picture3.jpg'
  	},
  	{
  		title:'Step 4',
  		content:'Step 4: some staff to read here',
  		img:'assets/illustrations/Picture4.jpg'
  	}
  ];
}
