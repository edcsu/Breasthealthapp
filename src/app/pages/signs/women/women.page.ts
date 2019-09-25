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
  issMultiMedicalCare = false;
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

  backFromSymptomatic() {
    this.isSymptomatic = false;
    this.isWomen = true;
  }

  showAsymptomatic() {
    this.isWomen = false;
    this.isAsymptomatic = true;
  }

  showDiagonosed() {
    this.isLump = false;
    this.isDiagonosed = true;
  }

  backToLump() {
    this.isLump = false;
    this.isSymptomatic = true;
  }

  backToDiagonosedFromLump() {
    this.isLumpTreated = false;
    this.isLump = true;
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

  backToTreatedFromExcisedLump() {
    this.isExcisedLump = false;
    this.isLumpTreated = true;
  }

  backToIsLumpTreatedFromNot(){
    this.isLumpNotTreated = false;
    this.isLumpTreated = true;
  }

  showsFromExcisedLump() {
    this.isExcisedLump = false;
    this.isFromExcisedLump = true;
  }

  showsBackToExcisedLump() {
    this.isFromExcisedLump = false;
    this.isExcisedLump = true;
  }

  showsFromBenign() {
    this.isFromExcisedLump = false;
    this.isExcisedLumpHealed = true;
  }

  showsBackToBenign() {
    this.isExcisedLumpHealed = false;
    this.isFromExcisedLump = true;
  }

  showsFromHealedCompletely() {
    this.isExcisedLumpHealed = false;
    this.isHealedCompletely = true;
  }

  showsBackToHealedFromReview() {
    this.isHealedCompletely = false;
    this.isExcisedLumpHealed = true;
  }

  showsFromHealedNotCompletely() {
    this.isExcisedLumpHealed = false;
    this.isNotHealedCompletely = true;
  }

  showsBackToHealedFromNot() {
    this.isNotHealedCompletely = false;
    this.isExcisedLumpHealed = true;
  }

  showsFromScarPain() {
    this.isNotHealedCompletely = false;
    this.isFromScarPain = true;
  }

  showsBackToScarPain() {
    this.isFromScarPain = false;
    this.isNotHealedCompletely = true;
  }

  showsFromFeelLumps() {
    this.isNotHealedCompletely = false;
    this.isFromFeelLumps = true;
  }

  showsBackToFeelLumps() {
    this.isFromFeelLumps = false;
    this.isNotHealedCompletely = true;
  }

  showsFromExcisedLumpCancer() {
    this.isFromExcisedLump = false;
    this.isFromExcisedLumpCancer = true;
  }

  showsMultiMedicalCare() {
    this.isFromExcisedLump = false;
    this.issMultiMedicalCare = true;
  }

  showsExcisedLumpCancer() {
    this.issMultiMedicalCare = false;
    this.isFromExcisedLump = true;
  }

  showsfromMultiMedicalCare() {
    this.issMultiMedicalCare = false;
    this.isFromMultiMedicalCare = true;
  }

  showsBackToMultiMedicalCare() {
    this.isFromMultiMedicalCare = false;
    this.issMultiMedicalCare = true;
  }

  showsfromCompletedCare() {
    this.isFromMultiMedicalCare = false;
    this.isFromCompletedCare = true;
  }

  showsBackToCareType() {
    this.isFromCompletedCare = false;
    this.isFromMultiMedicalCare = true;
  }

  showsNotLump() {
    this.isSymptomatic = false;
    this.isNoLump = true;
  }

  backToLumpStatusFromNoLump() {
    this.isNoLump = false;
    this.isSymptomatic = true;
  }

  showsfromisNoLump() {
    this.isNoLump = false;
    this.isNoLumpTreated = true;
  }

  backToDiagonosedStatusFromNoLump() {
    this.isNoLumpTreated = false;
    this.isNoLump = true;
  }

  showsfromisNotDiagonosedLump() {
    this.isNoLump = false;
    this.isNotDiagonosedLump = true;
  }

  showsfromPostmenopausal() {
    this.isNotDiagonosedLump = false;
    this.isFromPostmenopausal = true;
  }

  backToPostmenopausal() {
    this.isFromPostmenopausal = false;
    this.isNotDiagonosedLump = true;
  }

  showsfromNeverDoneMammo() {
    this.isFromPostmenopausal = false;
    this.isFromNeverDoneMammo = true;
  }

  backToNeverDoneMamo() {
    this.isFromNeverDoneMammo = false;
    this.isFromPostmenopausal = true;
  }

  showsfromNeverDoneMammoDo() {
    this.isFromNeverDoneMammo = false;
    this.isFromNeverDoneMammoDo = true;
  }

  backToDoMamo() {
    this.isFromNeverDoneMammoDo = false;
    this.isFromNeverDoneMammo = true;
  }

  backToNoLumpSymp() {
    this.isNotDiagonosedLump = false;
    this.isNoLump = true;
  }

  showsfromPremenopausal() {
    this.isNotDiagonosedLump = false;
    this.isFromPremenopausal = true;
  }

  showsNotDiagnosednFromPre() {
    this.isFromPremenopausal = false;
    this.isNotDiagonosedLump = true;
  }

  showsfromEverDoneMammo() {
    this.isFromPostmenopausal = false;
    this.isFromEverDoneMammoDo = true;
  }

  showsPostmenopausalfromEverDoneMammo() {
    this.isFromEverDoneMammoDo = false;
    this.isFromPostmenopausal = true;
  }

  showsfromLessthan1Year() {
    this.isFromEverDoneMammoDo = false;
    this.isFromLessthan1Year = true;
  }

  showsEverDoneMammo() {
    this.isFromLessthan1Year = false;
    this.isFromEverDoneMammoDo = true;
  }

  showsfromGreaterthan1Year() {
    this.isFromEverDoneMammoDo = false;
    this.isFromGreaterthan1Year = true;
  }

  showsEverDoneMammoAgain() {
    this.isFromGreaterthan1Year = false;
    this.isFromEverDoneMammoDo = true;
  }

  showsfromPositiveForMass() {
    this.isFromLessthan1Year = false;
    this.IsFromPositiveForMass = true;
  }

  BackToMassStatusFromPositive() {
    this.IsFromPositiveForMass = false;
    this.isFromLessthan1Year = true;
  }

  showsfromNegativeForMass() {
    this.isFromLessthan1Year = false;
    this.isFromNegativeForMass = true;
  }

  BackToMassStatusFromNegative() {
    this.isFromNegativeForMass = false;
    this.isFromLessthan1Year = true;
  }

  showsfrom3050() {
    this.isFromPremenopausal = false;
    this.isFrom3050 = true;
  }

  showsFromPreFrom3050() {
    this.isFrom3050 = false;
    this.isFromPremenopausal = true;
  }

  showsfrom3050Negative() {
    this.isFrom3050 = false;
    this.isFrom3050Negative = true;
  }

  shows3050From3050Negative() {
    this.isFrom3050Negative = false;
    this.isFrom3050 = true;
  }

  showsfrom3050NegativeSurgery() {
    this.isFrom3050Negative = false;
    this.isFrom3050NegativeSurgery = true;
  }

  showsSurgery() {
    this.isFrom3050Negative = true;
    this.isFrom3050NegativeSurgery = false;
  }

  showsfromlessThan30() {
    this.isFromPremenopausal = false;
    this.isFromLessThan30 = true;
  }

  showsPrefromlessThan30() {
    this.isFromLessThan30 = false;
    this.isFromPremenopausal = true;
  }

  showsfromLessthan30UsScan() {
    this.isFromLessThan30 = false;
    this.isFromLessThan30UsScan = true;
  }

  showsUSscanfromLessThan30Result() {
    this.isFromLessThan30UsScan = false;
    this.isFromLessThan30 = true;
  }

  showsfromLessThan30UsScanNegative() {
    this.isFromLessThan30UsScan = false;
    this.isFromLessThan30UsScanNegative = true;
  }

  showsUSscanResultFromRepeat() {
    this.isFromLessThan30UsScanNegative = false;
    this.isFromLessThan30UsScan = true;
  }

  showsfromLessThan30UsScanNegativeRepeat() {
    this.isFromLessThan30UsScanNegative = false;
    this.isFromRepeat3Months = true;
  }

  showsRepeatFromSecondOpinion() {
    this.isFromRepeat3Months = false;
    this.isFromLessThan30UsScanNegative = true;
  }

  showsfromLikelyCancer() {
    this.isFromLessThan30UsScan = false;
    this.isLikelyCancer = true;
  }

  showsUSscanResultFromPostiveResult() {
    this.isFromLessThan30UsScan = true;
    this.isLikelyCancer = false;
  }

  showsfromUnlikelyCancer() {
    this.isLikelyCancer = false;
    this.isFromUnlikelyCancer = true;
  }

  showsCancerStatus() {
    this.isFromUnlikelyCancer = false;
    this.isLikelyCancer = true;
  }

  showsfromGreaterthan4cm() {
    this.isFromUnlikelyCancer = false;
    this.isFromGreaterthan4cm = true;
  }

  showsSizeFromGreaterThan4() {
    this.isFromGreaterthan4cm = false;
    this.isFromUnlikelyCancer = true;
  }

  showsfromLessthan4cm() {
    this.isFromUnlikelyCancer = false;
    this.isFromLessthan4cm = true;
  }

  showsUnlikelyCancerFromLessThan4() {
    this.isFromLessthan4cm = false;
    this.isFromUnlikelyCancer = true;
  }

  showsfromRemoveMass() {
    this.isFromGreaterthan4cm = false;
    this.isFromRemoveMass = true;
  }

  showsRemoveMassFromGreaterThan4() {
    this.isFromRemoveMass = false;
    this.isFromGreaterthan4cm = true;
  }

  showsfromRemoveMassHistology() {
    this.isFromRemoveMass = false;
    this.isFromRemoveMassHistology = true;
  }

  showsHistologyfromResultGreaterThan4() {
    this.isFromRemoveMassHistology = false;
    this.isFromRemoveMass = true;
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
