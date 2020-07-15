import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './shell/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { AngularMaterialModule } from './shared/modules/angular-material.module';

// Highcharts
import { HighchartsModule } from './shared/modules/highcharts.module';

// Reactive Form Module
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

// Pages
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { PatientViewComponent } from './pages/patient-view/patient-view.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';

// Page Components
import { PatientDashboardCardComponent } from './components/patient-dashboard-card/patient-dashboard-card.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { PatientStatisticsComponent } from './components/patient-statistics/patient-statistics.component';
import { PatientTimeActivityPlotComponent } from './components/patient-time-activity-plot/patient-time-activity-plot.component';
import { PatientActivityLogsComponent } from './components/patient-activity-logs/patient-activity-logs.component';
import { PatientDashboardCollectionComponent } from './components/patient-dashboard-collection/patient-dashboard-collection.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PatientManagementComponent } from './components/patient-management/patient-management.component';
import { PatientManagementToggleComponent } from './components/patient-management-toggle/patient-management-toggle.component';
import { MessagingPanelComponent } from './components/messaging-panel/messaging-panel.component';
import { CalendarPanelComponent } from './components/calendar-panel/calendar-panel.component';
import { SettingsPanelComponent } from './components/settings-panel/settings-panel.component';
import { CarersListComponent } from './components/carers-list/carers-list.component';
import { PatientDeleteComponent } from './components/patient-delete/patient-delete.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { CalendarCreateComponent } from './components/calendar-create/calendar-create.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';

// Services
import { AuthenticationService } from './shared/services/authentication/authentication.service';
import { ToastService } from './shared/services/toast/toast.service';
import { IrisService } from './shared/services/iris/iris.service';
import { UtilsService } from './shared/services/utils/utils.service';

// Pipes
import { TimePipePipe } from './shared/pipes/time-pipe.pipe';
import { DatePipePipe } from './shared/pipes/date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PatientDashboardComponent,
    PatientViewComponent,
    AdminPanelComponent,
    PatientDashboardCardComponent,
    PatientInfoComponent,
    PatientStatisticsComponent,
    PatientTimeActivityPlotComponent,
    PatientActivityLogsComponent,
    PatientDashboardCollectionComponent,
    PageTitleComponent,
    PatientManagementComponent,
    PatientManagementToggleComponent,
    MessagingPanelComponent,
    CalendarPanelComponent,
    SettingsPanelComponent,
    CarersListComponent,
    PatientDeleteComponent,
    ConfirmDialogComponent,
    CalendarCreateComponent,
    CalendarViewComponent,
    TimePipePipe,
    DatePipePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HighchartsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    // Services
    UtilsService,
    AuthenticationService,
    ToastService,
    IrisService,
    TimePipePipe,
    DatePipePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
