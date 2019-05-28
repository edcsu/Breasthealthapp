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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
