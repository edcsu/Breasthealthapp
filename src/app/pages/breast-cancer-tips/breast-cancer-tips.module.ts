import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BreastCancerTipsPage } from './breast-cancer-tips.page';

const routes: Routes = [
  {
    path: '',
    component: BreastCancerTipsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BreastCancerTipsPage]
})
export class BreastCancerTipsPageModule {}
