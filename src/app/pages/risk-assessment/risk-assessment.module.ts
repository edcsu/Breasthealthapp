import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RiskAssessmentPage } from './risk-assessment.page';

const routes: Routes = [
  {
    path: '',
    component: RiskAssessmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RiskAssessmentPage]
})
export class RiskAssessmentPageModule {}
