import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Guards.
import { InnerAuthGuard } from './shared/guards/inner-auth.guard'; // For when the user is logged in.
import { OuterAuthGuard } from './shared/guards/outer-auth.guard'; // For before the user is logged in.
// Routed components.
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DeviceComponent } from './pages/device/device/device.component';
import { PatientComponent } from './pages/patient/patient/patient.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Sets default page.
  { path: 'login', component: LoginComponent, canActivate: [InnerAuthGuard] }, // Only accessible whilst not logged in.
  { path: 'dashboard', component: DashboardComponent, canActivate: [OuterAuthGuard] }, // Only accessible whilst logged in.
  { path: 'device', component: DeviceComponent, canActivate: [OuterAuthGuard] }, // Only accessible whilst logged in.
  { path: 'patient', component: PatientComponent, canActivate: [OuterAuthGuard] }, // Only accessible whilst logged in.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
