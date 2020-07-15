import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
   imports: [
      CommonModule,
      HighchartsChartModule,
   ],
   exports: [
      HighchartsChartModule,
   ],
   providers: [
   ]
})

export class HighchartsModule {
}