import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.page.html',
  styleUrls: ['./children.page.scss'],
})
export class ChildrenPage implements OnInit {

  isChildren = true;
  isNeonates = false;
  isInfants = false;
  isAdolescents = false;
  isAsymptomatic = false;
  isSymptomatic = false;
  isDoCBE = false;
  isLump = false;
  isLumpCBE = false;
  isLumpCBEPositive = false;
  isNonLump = false;
  isNonLumpCBE = false;

  constructor() { }

  ngOnInit() {
  }

  showNeonatesOptions() {
    this.isChildren = false;
    this.isNeonates = true;
  }

  showChildrenfromNeonates() {
    this.isChildren = true;
    this.isNeonates = false;
  }

  showChildrenfromInfants() {
    this.isChildren = false;
    this.isInfants = true;
  }

  showfromAdolescents() {
    this.isChildren = false;
    this.isAdolescents = true;
  }

  showAsymptomatic() {
    this.isAdolescents = false;
    this.isAsymptomatic = true;
  }

  showDoCBE() {
    this.isAsymptomatic = false;
    this.isDoCBE = true;
  }

  showSymptomatic() {
    this.isAdolescents = false;
    this.isSymptomatic = true;
  }

  showLump() {
    this.isSymptomatic = false;
    this.isLump = true;
  }

  showFromLumpCBE() {
    this.isLump = false;
    this.isLumpCBE = true;
  }

  showFromLumpCBEPositive() {
    this.isLumpCBE = false;
    this.isLumpCBEPositive = true;
  }

  showNonLump() {
    this.isSymptomatic = false;
    this.isNonLump = true;
  }

  showFromNonLumpCBE() {
    this.isNonLump = false;
    this.isNonLumpCBE = true;
  }

}


