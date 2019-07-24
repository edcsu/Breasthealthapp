import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-check',
  templateUrl: './self-check.page.html',
  styleUrls: ['./self-check.page.scss'],
})

export class SelfCheckPage implements OnInit {

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
