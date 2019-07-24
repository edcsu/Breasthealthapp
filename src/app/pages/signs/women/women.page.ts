import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.page.html',
  styleUrls: ['./women.page.scss'],
})
export class WomenPage implements OnInit {
  isWomen = true;
  isSymptomatic = false;
  isAsymptomatic = false;
  isLump = false;
  isNoLump = false;
  isDiagonosed = false;
  isNonDiagonosed = false;
  isLumpTreated = false;
  isNoLumpTreated = false;
  isExcisedLump = false;
  isNotScreened = false;
  isCBE = false;
  isSBE = false;
  isEnd = false;
  isLumpNotTreated = false;

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
    this.isDiagonosed = true;
  }

  showNonDiagonosed() {
    this.isLump = false;
    this.isNonDiagonosed = true;
  }

  showsLump() {
    this.isSymptomatic = false;
    this.isLump = true;
  }

  showsisLumpTreated() {
    this.isLump = false;
    this.isLumpTreated = true;
  }

  showsisLumpNotTreated() {
    this.isLumpTreated = false;
    this.isLumpNotTreated = true;
  }

  showsisExcisedLump() {
    this.isLumpTreated = false;
    this.isExcisedLump = true;
  }

  showsNotLump() {
    this.isSymptomatic = false;
    this.isNoLump = true;
  }

  showsfromisNoLump() {
    this.isNoLump = false;
    this.isNoLumpTreated = true;
  }

  showfromNotScreened() {
    this.isAsymptomatic = false;
    this.isNotScreened = true;
  }

  showfromCBE() {
    this.isNotScreened = false;
    this.isCBE = true;
  }

  showfromSBE() {
    this.isNotScreened = false;
    this.isSBE = true;
  }

  showEnd(value) {
    if (value === 1) {
      this.isCBE = false;
    } else {
      this.isSBE = false;
    }
    this.isEnd = true;
  }

  showStart() {
    this.isEnd = false;
    this.isWomen = true;
  }

}
