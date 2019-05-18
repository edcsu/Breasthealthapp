import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nipples-tips',
  templateUrl: './nipples-tips.page.html',
  styleUrls: ['./nipples-tips.page.scss'],
})

export class NipplesTipsPage implements OnInit {
  slides = null;
  constructor() {
    this.slides = document.querySelector('ion-slides');
  }
  ngOnInit() {
  }
}
