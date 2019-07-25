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
  isNotDiagonosedLump = false;
  isFromPostmenopausal = false;
  isFromNeverDoneMammoDo = false;
  isFromNeverDoneMammo = false;
  isFromPremenopausal = false;
  isFrom3050 = false;
  isFrom3050Negative = false;
  isFrom3050NegativeSurgery = false;
  isFromLessThan30 = false;
  isFromLessThan30UsScan = false;
  isFromLessThan30UsScanNegative = false;
  isFromRepeat3Months = false;
  isLikelyCancer = false;
  isFromUnlikelyCancer = false;
  isFromGreaterthan4cm = false;
  isFromLessthan4cm = false;
  isFromRemoveMass = false;
  isFromRemoveMassHistology = false;
  isFromEverDoneMammoDo = false;
  isFromLessthan1Year = false;
  isFromGreaterthan1Year = false;
  isFromNegativeForMass = false;
  IsFromPositiveForMass = false;
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

  showsfromisNotDiagonosedLump() {
    this.isNoLump = false;
    this.isNotDiagonosedLump = true;
  }

  showsfromPostmenopausal() {
    this.isNotDiagonosedLump = false;
    this.isFromPostmenopausal = true;
  }

  showsfromNeverDoneMammo() {
    this.isFromPostmenopausal = false;
    this.isFromNeverDoneMammo = true;
  }

  showsfromNeverDoneMammoDo() {
    this.isFromNeverDoneMammo = false;
    this.isFromNeverDoneMammoDo = true;
  }

  showsfromPremenopausal() {
    this.isFromNeverDoneMammo = false;
    this.isFromNeverDoneMammoDo = true;
  }

  showsfromEverDoneMammo() {
    this.isFromPostmenopausal = false;
    this.isFromEverDoneMammoDo = true;
  }

  showsfromLessthan1Year() {
    this.isFromEverDoneMammoDo = false;
    this.isFromLessthan1Year = true;
  }

  showsfromGreaterthan1Year() {
    this.isFromEverDoneMammoDo = false;
    this.isFromGreaterthan1Year = true;
  }

  showsfromPositiveForMass() {
    this.isFromLessthan1Year = false;
    this.IsFromPositiveForMass = true;
  }

  showsfromNegativeForMass() {
    this.isFromLessthan1Year = false;
    this.isFromNegativeForMass = true;
  }

  showsfrom3050() {
    this.isFromPremenopausal = false;
    this.isFrom3050 = true;
  }

  showsfrom3050Negative() {
    this.isFrom3050 = false;
    this.isFrom3050Negative = true;
  }

  showsfrom3050NegativeSurgery() {
    this.isFrom3050Negative = false;
    this.isFrom3050NegativeSurgery = true;
  }

  showsfromlessThan30() {
    this.isFromPremenopausal = false;
    this.isFromLessThan30 = true;
  }

  showsfromLessthan30UsScan() {
    this.isFromLessThan30 = false;
    this.isFromLessThan30UsScan = true;
  }

  showsfromLessThan30UsScanNegative() {
    this.isFromLessThan30UsScan = false;
    this.isFromLessThan30UsScanNegative = true;
  }

  showsfromLessThan30UsScanNegativeRepeat() {
    this.isFromLessThan30UsScanNegative = false;
    this.isFromRepeat3Months = true;
  }

  showsfromLikelyCancer() {
    this.isFromLessThan30UsScan = false;
    this.isLikelyCancer = true;
  }

  showsfromUnlikelyCancer() {
    this.isLikelyCancer = false;
    this.isFromUnlikelyCancer = true;
  }

  showsfromGreaterthan4cm() {
    this.isFromUnlikelyCancer = false;
    this.isFromGreaterthan4cm = true;
  }

  showsfromLessthan4cm() {
    this.isFromUnlikelyCancer = false;
    this.isFromLessthan4cm = true;
  }

  showsfromRemoveMass() {
    this.isFromGreaterthan4cm = false;
    this.isFromRemoveMass = true;
  }

  showsfromRemoveMassHistology() {
    this.isFromRemoveMass = false;
    this.isFromRemoveMassHistology = true;
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
