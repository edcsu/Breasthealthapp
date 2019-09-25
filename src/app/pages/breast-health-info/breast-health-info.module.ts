import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BreastHealthInfoPage } from './breast-health-info.page';

const routes: Routes = [
  {
    path: '',
    component: BreastHealthInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BreastHealthInfoPage]
})
export class BreastHealthInfoPageModule {}
