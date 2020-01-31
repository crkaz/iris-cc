import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import { ToastService } from '../shared/services/toast/toast.service';

// Valid options for toolbar colour.
const enum ToolbarColour { blue = "primary", pink = "accent", red = "warn", grey = "" };
const ASSET_PATH: string = "../../../assets/";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly logo: string = "logo-4";

  public readonly toolbarColour: string = ToolbarColour.blue;
  public readonly title: string = 'IRIS-CC';
  public readonly slogan: string = "Command centre for IRIS enabled patients.";
  public readonly logoPath = ASSET_PATH + "/logo/" + this.logo + ".png";
  public readonly logOutIconPath = ASSET_PATH + "/icons/log-out.svg";

  constructor(
    public authService: AuthenticationService,
    public toastService: ToastService,
    public router: Router,
  ) { }

  get IsLoggedIn() {
    return this.authService.IsLoggedIn;
  }

  LogOut() {
    this.authService
      .LogOut()
      .then(_ => {
        this.toastService.Success("Logged out successfully.");
      })
      .catch(err => {
        console.log("error: " + err);
      });
  }
}
