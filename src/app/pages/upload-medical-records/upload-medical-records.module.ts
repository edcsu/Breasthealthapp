import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UploadMedicalRecordsPage } from './upload-medical-records.page';

const routes: Routes = [
  {
    path: '',
    component: UploadMedicalRecordsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UploadMedicalRecordsPage]
})
export class UploadMedicalRecordsPageModule {}
