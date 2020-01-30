import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public readonly USER_COOKIE = "IRIS_CC_USER"; //@TODO: Change to a token.
  public readonly LOGIN_PAGE = "login";
  public readonly LANDING_PAGE = "dashboard";

  public readonly USER_COLLECTION = {
    attention: {
      collectionTitle: "Attention Required",
      cardColour: "#e87d7d80"
    },
    online: {
      collectionTitle: "Online",
      cardColour: "#673ab780"
    },
    offline: {
      collectionTitle: "Offline",
      cardColour: "#b3b3b380"
    }
  }
}
