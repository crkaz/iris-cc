// Default imports:
import { NgModule, ModuleWithProviders, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventAggregator } from './EventAggregator';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class EventAggregatorModule {

  static forRoot(): ModuleWithProviders<EventAggregatorModule> {
    return {
      ngModule: EventAggregatorModule,
      providers: [EventAggregator]
    };
  }
}

@Injectable()
@NgModule({
  exports: [EventAggregatorModule],
  providers: [EventAggregator],
})
export class EventAggregatorRootModule { }


