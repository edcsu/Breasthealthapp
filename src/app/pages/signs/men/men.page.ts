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

  showAsymptomatic() {
    this.isMen = false;
    this.isAsymptomatic = true;
  }

  showLump() {
    this.isSymptomatic = false;
    this.isLump = true;
  }

  showNotLump() {
    this.isSymptomatic = false;
    this.isNotLump = true;
  }

  showDiscrete() {
    this.isLump = false;
    this.isDiscrete = true;
  }

  showDiffuse() {
    this.isLump = false;
    this.isDiffuse = true;
  }

  showUSScan() {
    this.isDiscrete = false;
    this.isUSScan = true;
  }

  showPositiveCancer() {
    this.isUSScan = false;
    this.isPositiveCancer = true;
  }

  showNegativeCancer() {
    this.isUSScan = false;
    this.isNegativeCancer = true;
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

  showUSScan2() {
    this.isDiffuse = false;
    this.isUSScan2 = true;
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

  showPainUSScan() {
    this.isPain = false;
    this.isPainUSScan = true;
  }

  showPositivePainUSScan() {
    this.isPainUSScan = false;
    this.isPositivePainUSScan = true;
  }

  showPositivePainUSScan2() {
    this.isUSScan2 = false;
    this.isHyperplasia = true;
  }

  showFromHyperplasia() {
    this.isHyperplasia = false;
    this.isSubCuteMastectomy = true;
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

  showCBEPositve() {
    this.isFromCBE = false;
    this.isCBEPositve = true;
  }
}
