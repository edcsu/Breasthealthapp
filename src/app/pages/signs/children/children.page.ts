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

  backToChildrenfromInfants() {
    this.isInfants = false;
    this.isChildren = true;
  }

  showfromAdolescents() {
    this.isChildren = false;
    this.isAdolescents = true;
  }

  backToChildrenfromAdolescents() {
    this.isAdolescents = false;
    this.isChildren = true;
  }

  showAsymptomatic() {
    this.isAdolescents = false;
    this.isAsymptomatic = true;
  }

  backToAdolescentsfromAsymptomatic() {
    this.isAsymptomatic = false;
    this.isAdolescents = true;
  }

  showDoCBE() {
    this.isAsymptomatic = false;
    this.isDoCBE = true;
  }

  backToAsymptomatic() {
    this.isDoCBE = false;
    this.isAsymptomatic = true;
  }

  showSymptomatic() {
    this.isAdolescents = false;
    this.isSymptomatic = true;
  }

  backToAdolescentsfromSymptomatic() {
    this.isSymptomatic = false;
    this.isAdolescents = true;
  }

  showLump() {
    this.isSymptomatic = false;
    this.isLump = true;
  }

  backToshowLump() {
    this.isLump = false;
    this.isSymptomatic = true;
  }

  showFromLumpCBE() {
    this.isLump = false;
    this.isLumpCBE = true;
  }

  backToLumpCBE() {
    this.isLumpCBE = false;
    this.isLump = true;
  }

  showFromLumpCBEPositive() {
    this.isLumpCBE = false;
    this.isLumpCBEPositive = true;
  }

  backToLumpCBEResult() {
    this.isLumpCBEPositive = false;
    this.isLumpCBE = true;
  }

  showNonLump() {
    this.isSymptomatic = false;
    this.isNonLump = true;
  }

  backToshowNonLump() {
    this.isNonLump = false;
    this.isSymptomatic = true;
  }

  showFromNonLumpCBE() {
    this.isNonLump = false;
    this.isNonLumpCBE = true;
  }

  backToNonLumpCBE() {
    this.isNonLumpCBE = false;
    this.isNonLump = true;
  }

}


