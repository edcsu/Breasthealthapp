import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignsSymptomsPage } from './signs-symptoms.page';

const routes: Routes = [
  {
    path: '',
    component: SignsSymptomsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignsSymptomsPage]
})
export class SignsSymptomsPageModule {}
