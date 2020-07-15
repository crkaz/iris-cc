import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication/authentication.service";
import { UtilsService } from "../services/utils/utils.service"

@Injectable({
  providedIn: "root"
})
export class InnerAuthGuard implements CanActivate {
  constructor(
    public utils: UtilsService,
    public authService: AuthenticationService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.IsLoggedIn) {
      this.router.navigate([this.utils.LANDING_PAGE]);
    }
    return true;
  }
}
