import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breast-cancer-tips',
  templateUrl: './breast-cancer-tips.page.html',
  styleUrls: ['./breast-cancer-tips.page.scss']
})
export class BreastCancerTipsPage implements OnInit {
  slides = null;
  constructor() {
    this.slides = document.querySelector('ion-slides');
  }
  ngOnInit() {
  }

}
