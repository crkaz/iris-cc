import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav'; //*
import { MatListModule } from '@angular/material/list'; //*
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker'; //*
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion'; //*
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; //*
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox'; //*
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
   imports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatBadgeModule,
      MatSidenavModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatDatepickerModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule,
      MatSnackBarModule,
      MatCardModule,
      MatExpansionModule,
      MatSlideToggleModule,
      MatSliderModule,
      MatButtonToggleModule,
      MatCheckboxModule,
      MatRadioModule,
      MatDialogModule,
      MatProgressSpinnerModule,
   ],
   exports: [
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatBadgeModule,
      MatSidenavModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatDatepickerModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule,
      MatSnackBarModule,
      MatCardModule,
      MatExpansionModule,
      MatSlideToggleModule,
      MatSliderModule,
      MatButtonToggleModule,
      MatCheckboxModule,
      MatRadioModule,
      MatDialogModule,
      MatProgressSpinnerModule,
   ],
   providers: [
      MatDatepickerModule,
   ]
})

export class AngularMaterialModule { }