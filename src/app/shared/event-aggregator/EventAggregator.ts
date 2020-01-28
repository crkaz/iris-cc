import { Injectable } from "@angular/core";
import { EventBase } from "./EventBase";
import { EventAggregatorModule } from './event-aggregator.module';

@Injectable()
export class EventAggregator {
  getEvent<T extends EventBase>(type: { new(): T }): T {
    let instance: T;
    let index = this.events.findIndex(
      item => item[0] === type.toLocaleString()
    );

    if (index > -1) {
      const eventBase: EventBase = this.events[index][1]; //access second element of the tuple
      return eventBase as T;
    } else {
      instance = new type();
      this.events.push([type.toLocaleString(), instance]);
    }

    return instance;
  }

  //Tuple cache array
  private events: Array<[string, EventBase]> = [];
}
