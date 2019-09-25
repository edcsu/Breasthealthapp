import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NipplesTipsPage } from './nipples-tips.page';

const routes: Routes = [
  {
    path: '',
    component: NipplesTipsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NipplesTipsPage]
})
export class NipplesTipsPageModule {}
