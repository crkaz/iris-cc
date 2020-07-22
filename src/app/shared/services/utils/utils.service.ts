import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  constructor() {}

  // public readonly USER_COOKIE = "IRIS_CC_USER"; //@TODO: Change to a token.
  public readonly LOGIN_PAGE = "login";
  public readonly LANDING_PAGE = "dashboard";

  /** Delay for a number milliseconds. */
  public Delay(ms: number) {
    return new Promise((_) => setTimeout(_, ms));
  }

  EnumToArray(e) {
    return Object.keys(e)
      .filter((value) => isNaN(Number(value)) === false)
      .map((key) => e[key]);
  }
}
