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
} from '@angular/material'

// Firebase Modules
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

// My modules.
import { EventAggregatorModule, EventAggregatorRootModule } from './shared/event-aggregator/event-aggregator.module';

// Pages
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DeviceComponent } from './pages/device/device/device.component';

// Components
import { DeviceCardComponent } from './components/device-collection/device-card/device-card.component';
import { DeviceCollectionComponent } from './components/device-collection/device-collection/device-collection.component';

// Services
import { AuthenticationService } from './shared/services/authentication/authentication.service';
import { ToastService } from './shared/services/toast/toast.service';
import { IrisService } from './shared/services/iris/iris.service';
import { UtilsService } from './shared/services/utils/utils.service';

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    LoginComponent,
    DashboardComponent,
    DeviceComponent,
    // Components
    DeviceCardComponent,
    DeviceCollectionComponent,
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
