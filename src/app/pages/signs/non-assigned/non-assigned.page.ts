import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-assigned',
  templateUrl: './non-assigned.page.html',
  styleUrls: ['./non-assigned.page.scss'],
})
export class NonAssignedPage implements OnInit {
  isNonDiagonsed = true;
  isPremenopausal = false;
  isPostMenopausal = false;
  isBetween = false;
  isLess = false;

  constructor() { }

  ngOnInit() {
  }

  showPremenopausal(){
    this.isNonDiagonsed = false;
    this.isPremenopausal = true;
  }

  showPostMenopausal(){
    this.isNonDiagonsed = false;
    this.isPostMenopausal = true;
  }
 
  showBetween(){
    this.isPremenopausal = false;
    this.isBetween = true;
  }
 
  showLess(){
    this.isPremenopausal = false;
    this.isLess = true;
  }


}
