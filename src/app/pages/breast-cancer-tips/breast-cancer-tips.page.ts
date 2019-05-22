import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breast-cancer-tips',
  templateUrl: './breast-cancer-tips.page.html',

  styleUrls: ['./breast-cancer-tips.page.scss']
})
export class BreastCancerTipsPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
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
