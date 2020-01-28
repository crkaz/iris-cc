import { Injectable } from '@angular/core';
import { Subject, Subscription } from "rxjs";
import { EventBase } from "./EventBase";
import { EventAggregatorModule } from './event-aggregator.module';

@Injectable()
export class PubSubEvent<T> extends EventBase {
  private source = new Subject<T>(); // Observable string source (RxJS)
  private observable = this.source.asObservable(); // Observable string streams (RxJS)
  private subscriptions: Array<[(a: T) => void, Subscription]> = []; // Cache array of tuples

  Subscribe(observer: (a: T) => void, extraInfo: string = "") {
    console.log("Event subscribed " + extraInfo); // @TODO: Debug only.

    if (this.subscriptions.find(item => item[0] === observer) !== undefined)
      return;
    let subscription = this.observable.subscribe(observer);
    this.subscriptions.push([observer, subscription]);
  }

  Publish(payload: T = null, extraInfo: string = "") {
    console.log("Event published " + extraInfo); // @TODO: Debug only.
    this.source.next(payload);
  }

  Unsubscribe(observer: (a: T) => void, extraInfo: string = "") {
    console.log("Event unsubscribed " + extraInfo); // @TODO: Debug only.
    let foundIndex = this.subscriptions.findIndex(item => item[0] === observer);
    if (foundIndex > -1) {
      let subscription: Subscription = this.subscriptions[foundIndex][1];
      try {
        subscription.unsubscribe();
        console.log("unsubscribe successful");
      } catch { }

      this.subscriptions.splice(foundIndex, 1); //removes item
    }
  }
}
