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
  isDefer_CDE_to_after_20yrs_if_negotiative_family_history = false;
  
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

  showChildrenfromInfants(){
    this.isChildren = false;
    this.isInfants = true;
  }

  showfromAdolescents(){ 
    this.isChildren = false;
    this.isAdolescents = true;
  }

  showAsymptomaticfromDefer_CDE_to_after_20yrs_if_negotiative_family_history(){
    this.isAsymptomatic = false;
    this.isDefer_CDE_to_after_20yrs_if_negotiative_family_history = true;
  }
}


