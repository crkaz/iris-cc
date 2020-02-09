import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './shell/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Reactive Form Module
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

// Angular Material
import {
  MatToolbarModule, MatButtonModule,
  MatInputModule, MatFormFieldModule,
  MatIconModule, MatOptionModule,
  MatSnackBarModule, MatCardModule,
  MatExpansionModule, MatGridListModule,
  MatSlideToggleModule, MatSliderModule,
} from '@angular/material'

// Firebase Modules
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

// My modules.
import { EventAggregatorModule, EventAggregatorRootModule } from './shared/event-aggregator/event-aggregator.module';

// Services
import { AuthenticationService } from './shared/services/authentication/authentication.service';
import { ToastService } from './shared/services/toast/toast.service';
import { IrisService } from './shared/services/iris/iris.service';
import { UtilsService } from './shared/services/utils/utils.service';

// Pages
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DeviceComponent } from './pages/patient/device.component';

// Components
import { DeviceCollectionComponent } from './components/device-collection/device-collection.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { DeviceConfigComponent } from './components/device-config/device-config.component';
import { DeviceAnalyticsComponent } from './components/device-analytics/device-analytics.component';
import { DashTileComponent } from './components/dash-tile/dash-tile.component';
import { DashTilesPanelComponent } from './components/dash-tiles-panel/dash-tiles-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    LoginComponent,
    DashboardComponent,
    DeviceComponent,
    // Components
    DeviceCollectionComponent,
    PatientInfoComponent,
    DeviceConfigComponent,
    DeviceAnalyticsComponent,
    DashTileComponent,
    DashTilesPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Reactive Form Module
    ReactiveFormsModule,
    FormsModule,
    // Angular Material
    MatToolbarModule, MatButtonModule,
    MatInputModule, MatFormFieldModule,
    MatIconModule, MatOptionModule,
    MatSnackBarModule, MatCardModule,
    MatExpansionModule, MatGridListModule,
    MatSlideToggleModule, MatSliderModule,
    // Firebase modules
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    // Event aggregator module.
    EventAggregatorModule.forRoot(),
  ],
  providers: [
    EventAggregatorRootModule,
    // Services
    UtilsService,
    AuthenticationService,
    ToastService,
    IrisService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
