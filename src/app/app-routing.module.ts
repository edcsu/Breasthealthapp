import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'tips', loadChildren: './pages/tips/tips.module#TipsPageModule' },
  { path: 'specialist', loadChildren: './pages/specialist/specialist.module#SpecialistPageModule' },
  { path: 'self-check', loadChildren: './pages/self-check/self-check.module#SelfCheckPageModule' },
  { path: 'breast-health-info', loadChildren: './pages/breast-health-info/breast-health-info.module#BreastHealthInfoPageModule' },
  { path: 'support-group', loadChildren: './pages/support-group/support-group.module#SupportGroupPageModule' },
  { path: 'breast-cancer-tips', loadChildren: './pages/breast-cancer-tips/breast-cancer-tips.module#BreastCancerTipsPageModule' },
  { path: 'nipples-tips', loadChildren: './pages/nipples-tips/nipples-tips.module#NipplesTipsPageModule' },
  { path: 'self-care-link', loadChildren: './pages/self-care-link/self-care-link.module#SelfCareLinkPageModule' },
  { path: 'signs-symptoms', loadChildren: './pages/signs-symptoms/signs-symptoms.module#SignsSymptomsPageModule' },
  { path: 'risk-assessment', loadChildren: './pages/risk-assessment/risk-assessment.module#RiskAssessmentPageModule' },
  { path: 'women', loadChildren: './pages/signs/women/women.module#WomenPageModule' },
  { path: 'men', loadChildren: './pages/signs/men/men.module#MenPageModule' },
  { path: 'children', loadChildren: './pages/signs/children/children.module#ChildrenPageModule' },
  { path: 'non-assigned', loadChildren: './pages/signs/non-assigned/non-assigned.module#NonAssignedPageModule' },
  {
    path: 'upload-medical-records',
    loadChildren: './pages/upload-medical-records/upload-medical-records.module#UploadMedicalRecordsPageModule'
  },
  { path: 'set-profile', loadChildren: './pages/modal/set-profile/set-profile.module#SetProfilePageModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
