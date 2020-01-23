import { Component } from '@angular/core';


// Valid options for toolbar colour.
const enum ToolbarColour { blue = "primary", pink = "accent", red = "warn", grey = "" };
const ASSET_PATH: string = "../../../assets/";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly logo: string = "logo-2-lg-wcg-bi-cr";
  
  public readonly toolbarColour: string = ToolbarColour.blue; // primary, warn, accent, "" (grey).
  public readonly title: string = 'IRIS CC';
  public readonly slogan: string = "Command centre for IRIS enabled patients.";
  public readonly logoPath = ASSET_PATH + this.logo + ".png";
}
