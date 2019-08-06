import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.page.html',
  styleUrls: ['./men.page.scss'],
})
export class MenPage implements OnInit {
  isMen = true;
  isSymptomatic = false;
  isAsymptomatic = false;
  isLump = false;
  isNotLump = false;
  isDiscrete = false;
  isDiffuse = false;
  isUSScan = false;
  isPositiveCancer = false;
  isNegativeCancer = false;
  isStaging = false;
  isFollowUp = false;
  isCare = false;
  isPain = false;
  isPainUSScan = false;
  isPositivePainUSScan = false;
  isUSScan2 = false;
  isPositive = false;
  isNegative = false;
  isHyperplasia = false;
  isSubCuteMastectomy = false;
  isScreened = false;
  isNotScreened = false;
  isCBE = false;
  isCBEPositve = false;
  isFromCBE = false;


  constructor() { }

  ngOnInit() {
  }

  showSymptomatic() {
    this.isMen = false;
    this.isSymptomatic = true;
  }

  backToStartFromSymptomatic() {
    this.isSymptomatic = false;
    this.isMen = true;
  }

  showAsymptomatic() {
    this.isMen = false;
    this.isAsymptomatic = true;
  }

  backToStartFromAsymptomatic() {
    this.isAsymptomatic = false;
    this.isMen = true;
  }

  showLump() {
    this.isSymptomatic = false;
    this.isLump = true;
  }

  backToSymptomatic() {
    this.isLump = false;
    this.isSymptomatic = true;
  }

  showNotLump() {
    this.isSymptomatic = false;
    this.isNotLump = true;
  }

  backToSymptomaticFromNotLump() {
    this.isNotLump = false;
    this.isSymptomatic = true;
  }

  showDiscrete() {
    this.isLump = false;
    this.isDiscrete = true;
  }

  showDiffuse() {
    this.isLump = false;
    this.isDiffuse = true;
  }

  backFromDiffuse() {
    this.isDiffuse = false;
    this.isLump = true;
  }

  backFromDiscrete() {
    this.isDiscrete = false;
    this.isLump = true;
  }

  showUSScan() {
    this.isDiscrete = false;
    this.isUSScan = true;
  }

  backToUSScan() {
    this.isUSScan = false;
    this.isDiscrete = true;
  }

  showPositiveCancer() {
    this.isUSScan = false;
    this.isPositiveCancer = true;
  }

  backToResultFromPositiveCancer() {
    this.isPositiveCancer = false;
    this.isUSScan = true;
  }

  showNegativeCancer() {
    this.isUSScan = false;
    this.isNegativeCancer = true;
  }

  backToResultFromNegtiveCancer(){
    this.isNegativeCancer = false;
    this.isUSScan = true;
  }

  showStaging() {
    this.isPositiveCancer = false;
    this.isStaging = true;
  }

  showFollowUp() {
    this.isPositiveCancer = false;
    this.isFollowUp = true;
  }

  showCare() {
    this.isStaging = false;
    this.isCare = true;
  }

  backtoStaging() {
    this.isStaging = false;
    this.isPositiveCancer = true;
  }

  showUSScan2() {
    this.isDiffuse = false;
    this.isUSScan2 = true;
  }

  backToUSScan2() {
    this.isUSScan2 = false;
    this.isDiffuse = true;
  }

  showPositve() {
    this.isUSScan2 = false;
    this.isPositive = true;
  }

  showNegtive() {
    this.isUSScan2 = false;
    this.isNegative = true;
  }

  showPain() {
    this.isNotLump = false;
    this.isPain = true;
  }

  backToPain() {
    this.isPain = false;
    this.isNotLump = true;
  }

  showPainUSScan() {
    this.isPain = false;
    this.isPainUSScan = true;
  }

  backToPainUSScan() {
    this.isPainUSScan = false;
    this.isPain = true;
  }

  showPositivePainUSScan() {
    this.isPainUSScan = false;
    this.isPositivePainUSScan = true;
  }

  backToPainUSScanResult() {
    this.isPositivePainUSScan = false;
    this.isPainUSScan = true;
  }

  showPositivePainUSScan2() {
    this.isUSScan2 = false;
    this.isHyperplasia = true;
  }

  backToPositivePainUSScan2() {
    this.isHyperplasia = false;
    this.isUSScan2 = true;
  }

  showFromHyperplasia() {
    this.isHyperplasia = false;
    this.isSubCuteMastectomy = true;
  }

  backToHyperplasia() {
    this.isSubCuteMastectomy = false;
    this.isHyperplasia = true;
  }

  backToScreened() {
    this.isScreened = false;
    this.isAsymptomatic = true;
  }

  showScreened() {
    this.isAsymptomatic = false;
    this.isScreened = true;
  }

  showNotScreened() {
    this.isAsymptomatic = false;
    this.isNotScreened = true;
  }

  showCBE() {
    this.isNotScreened = false;
    this.isFromCBE = true;
  }

  backToNotScreened() {
    this.isFromCBE = false;
    this.isNotScreened = true;
  }

  showCBEPositve() {
    this.isFromCBE = false;
    this.isCBEPositve = true;
  }

  backToCBEPositive() {
    this.isCBEPositve = false;
    this.isFromCBE = true;
  }
}
