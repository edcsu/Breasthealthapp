import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nipples-tips',
  templateUrl: './nipples-tips.page.html',
  styleUrls: ['./nipples-tips.page.scss'],
})

export class NipplesTipsPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    }
  };

  constructor() {
  }
  ngOnInit() {
  }
}
