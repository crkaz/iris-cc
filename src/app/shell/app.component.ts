import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import { ToastService } from '../shared/services/toast/toast.service';

// Valid options for toolbar colour.
const enum ToolbarColour { blue = "primary", pink = "accent", red = "warn", lightGrey = "" };
const ASSET_PATH: string = "../../../assets/";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly logo: string = "logo";
  public readonly toolbarColour: string = ToolbarColour.blue;
  public readonly title: string = 'IRIS-CC';
  public readonly slogan: string = "Command centre for IRIS enabled patients.";
  public readonly logoPath = ASSET_PATH + "/logo/" + this.logo + ".png";
  public readonly logOutIconPath = ASSET_PATH + "/icons/log-out.svg";

  public showMenu: boolean;

  constructor(
    public authService: AuthenticationService,
    private toast: ToastService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.showMenu = false;
  }

  get IsLoggedIn() {
    return this.authService.IsLoggedIn;
  }

  ToggleMenu() {
    this.showMenu = !this.showMenu;
  }

  LogOut() {
    this.authService.LogOut();
  }

  SendPasswordReset(){
    // TODO: implement firabse auth method.
    this.toast.Success(
      "A link to reset your password has just been sent to your registered email address."
    );
  }
}
