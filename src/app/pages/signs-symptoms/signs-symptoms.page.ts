import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signs-symptoms',
  templateUrl: './signs-symptoms.page.html',
  styleUrls: ['./signs-symptoms.page.scss'],
})
export class SignsSymptomsPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  goToWomenSigns() {
    this.router.navigate(['women']);
  }

  goToMenSigns() {
    this.router.navigate(['men']);
  }

  goToChildrenSigns() {
    this.router.navigate(['children']);
  }

}
