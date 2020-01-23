import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './shell/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material
import {
  MatToolbarModule, MatButtonModule,
  MatInputModule, MatFormFieldModule,
  MatIconModule, MatOptionModule,
} from '@angular/material'

// Components
import { LoginComponent } from 'src/app/pages/login/login.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';

// Services
import { HololensService } from 'src/app/shared/services/hololens.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Angular Material
    MatToolbarModule, MatButtonModule,
    MatInputModule, MatFormFieldModule,
    MatIconModule, MatOptionModule,
    // Pages
    // LoginComponent,
    // DashboardComponent,
  ],
  providers: [
    // Services
    HololensService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
