import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public readonly USER_COOKIE = "IRIS_CC_USER"; //@TODO: Change to a token.
  public readonly LOGIN_PAGE = "login";
  public readonly LANDING_PAGE = "dashboard";
}
