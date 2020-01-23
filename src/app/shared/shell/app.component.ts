import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IRIS CC';
  slogan = "Command centre for IRIS enabled patients.";
  toolbarColour = ""; // Primary, warn, accent, "" (grey).
}
