import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.page.html',
  styleUrls: ['./women.page.scss'],
})
export class WomenPage implements OnInit {
  isWomen = true;
  isSymptomatic =false;
  isAsymptomatic = false;
  isLump = false;
  isNoLump =false;
  isDiagonosed = false;
  isNonDiagonosed = false;

  constructor() { }

  ngOnInit() {
  }

  showSymptomatic() {
    this.isWomen = false;
    this.isSymptomatic = true;
  }

  showAsymptomatic() {
    this.isWomen = false;
    this.isAsymptomatic = true;
  }

  
  showDiagonosed() {
    this.isLump = false;
    this. isDiagonosed = true;
  }

  showNonDiagonosed() {
    this.isLump = false;
    this. isNonDiagonosed = true;
  }

  showLump() {
    this.isSymptomatic = false;
    this. isLump = true;
  }
}
