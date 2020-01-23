import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './shell/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Reactive Form Module @TODO:
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

// Angular Material
import {
  MatToolbarModule, MatButtonModule,
  MatInputModule, MatFormFieldModule,
  MatIconModule, MatOptionModule,
} from '@angular/material'

// Firebase Modules @TODO:
import { environment } from "../../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

// Components
import { LoginComponent } from 'src/app/pages/login/login.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';

// Services
import { HololensService } from 'src/app/shared/services/hololens.service';

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    LoginComponent,
    DashboardComponent,
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
    // Firebase modules
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule,
    // AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    // Services
    HololensService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
