import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerAuthGuard } from './shared/guards/inner-auth.guard'
import { OuterAuthGuard } from './shared/guards/outer-auth.guard'
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {PatientDashboardComponent} from './pages/patient-dashboard/patient-dashboard.component';
import {PatientViewComponent} from './pages/patient-view/patient-view.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Sets default page.
  // { path: 'login', component: LoginPageComponent, canActivate: [InnerAuthGuard] }, // Only accessible whilst not logged in.
  // { path: 'dashboard', component: PatientDashboardComponent, canActivate: [OuterAuthGuard] }, // Only accessible whilst logged in.
  // { path: 'patient', component: PatientViewComponent, canActivate: [OuterAuthGuard] }, // Only accessible whilst logged in.
  // { path: 'admin', component: AdminPanelComponent, canActivate: [OuterAuthGuard] }, // Only accessible whilst logged in.
  { path: 'login', component: LoginPageComponent }, // Only accessible whilst not logged in.
  { path: 'dashboard', component: PatientDashboardComponent }, // Only accessible whilst logged in.
  { path: 'patient/:id', component: PatientViewComponent }, // Only accessible whilst logged in.
  { path: 'admin', component: AdminPanelComponent }, // Only accessible whilst logged in.
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
