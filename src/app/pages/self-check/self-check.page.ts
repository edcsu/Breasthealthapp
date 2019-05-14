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
  		content:'Lie down on your back with a pillow under your right shoulder.',
  		img:'assets/backgrounds/bg (33).jpg'
  	},
  	{
  		title:'Step 2',
  		content:'some staff to read here',
  		img:'assets/backgrounds/bg (48).jpg'
  	},
  	{
  		title:'Step 3',
  		content:'some staff to read here',
  		img:'assets/backgrounds/bg (50).jpg'
  	},
  	{
  		title:'Step 4',
  		content:'some staff to read here',
  		img:'assets/backgrounds/bg (43).jpg'
  	},
  	{
  		title:'Step 5',
  		content:'some staff to read here',
  		img:'assets/backgrounds/bg (12).jpg'
  	}
  ];

}
