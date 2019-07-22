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
  isUSScan2 = false;
  isPositive = false;
  isNegative = false;


  constructor() { }

  ngOnInit() {
  }

  showSymptomatic(){
    this.isMen = false;
    this.isSymptomatic = true;
  }

  showAsymptomatic(){
    this.isMen = false;
    this.isAsymptomatic = true;
  }

  showLump(){
    this.isSymptomatic= false;
    this.isLump = true;
  }

  showNotLump(){
    this.isAsymptomatic= false;
    this.isNotLump = true;
  }

  showDiscrete(){
    this.isLump= false;
    this.isDiscrete = true;
  }

  showDiffuse(){
    this.isNotLump= false;
    this.isDiffuse = true;
  }

  showUSScan(){
    this.isDiscrete= false;
    this.isUSScan = true;
  }

  showPositiveCancer(){
    this.isUSScan = false;
    this.isPositiveCancer = true;
  }

  showNegativeCancer(){
    this.isUSScan = false;
    this.isNegativeCancer = true;
  }

  showStaging(){
    this.isPositiveCancer = false;
    this.isStaging = true;
  }

  showFollowUp(){
    this.isPositiveCancer = false;
    this.isFollowUp = true;
  }
  
  
  showCare(){
    this.isStaging = false;
    this.isCare = true;
  }

  showUSScan2(){
    this.isPain = false;
    this.isUSScan = true;
  }

  showPositve(){
    this.isUSScan2 = false;
    this.isPositive = true;
  }
  
  showNegtive(){
    this.isUSScan2 = false;
    this.isNegative = true;
  }

}