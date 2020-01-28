// Default imports:
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventAggregator } from './EventAggregator';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class EventAggregatorModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EventAggregatorModule,
      providers: [EventAggregator]
    };
  }
}

@NgModule({
  exports: [EventAggregatorModule],
  providers: [EventAggregator],
})
export class EventAggregatorRootModule { }


