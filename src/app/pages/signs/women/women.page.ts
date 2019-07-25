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
  isFromExcisedLump = false;
  isExcisedLumpHealed = false;
  isHealedCompletely = false;
  isNotHealedCompletely = false;
  isFromFeelLumps = false;
  isFromScarPain = false;
  isFromExcisedLumpCancer = false;
  isFromMultiMedicalCare = false;
  isFromCompletedCare = false;
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

  showsFromExcisedLump() {
    this.isExcisedLump = false;
    this.isFromExcisedLump = true;
  }

  showsFromBenign() {
    this.isFromExcisedLump = false;
    this.isExcisedLumpHealed = true;
  }

  showsFromHealedCompletely() {
    this.isExcisedLumpHealed = false;
    this.isHealedCompletely = true;
  }

  showsFromHealedNotCompletely() {
    this.isExcisedLumpHealed = false;
    this.isNotHealedCompletely = true;
  }

  showsFromScarPain() {
    this.isNotHealedCompletely = false;
    this.isFromScarPain = true;
  }

  showsFromFeelLumps() {
    this.isNotHealedCompletely = false;
    this.isFromFeelLumps = true;
  }

  showsFromExcisedLumpCancer() {
    this.isFromExcisedLump = false;
    this.isFromExcisedLumpCancer = true;
  }

  showsfromMultiMedicalCare() {
    this.isFromExcisedLumpCancer = false;
    this.isFromMultiMedicalCare = true;
  }

  showsfromCompletedCare() {
    this.isFromMultiMedicalCare = false;
    this.isFromCompletedCare = true;
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
