import { Component, OnInit } from '@angular/core';
import { HololensService } from '../services/hololens.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


// Valid options for toolbar colour.
const enum ToolbarColour { blue = "primary", pink = "accent", red = "warn", grey = "" };
const ASSET_PATH: string = "../../../assets/";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private readonly logo: string = "logo-2-lg-wcg-bi-cr";

  public readonly toolbarColour: string = ToolbarColour.blue; // primary, warn, accent, "" (grey).
  public readonly title: string = 'IRIS CC';
  public readonly slogan: string = "Command centre for IRIS enabled patients.";
  public readonly logoPath = ASSET_PATH + this.logo + ".png";

  private formFields: FormGroup;
  private fromUnity: any[];

  constructor(
    private holoService: HololensService,
    private mFormBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.holoService
      .GetObject("/layout")
      .snapshotChanges()
      .subscribe(data => {
        let layout = data.payload.toJSON(); // Protocols list
        this.fromUnity = []; // Re-init list.
        for (var key in layout) {
          console.log(key);
          let coord = layout[key];
          console.log(layout);
          console.log(coord);
          this.fromUnity.push(coord);
        }
      });
    this.InitForm();
  }

  InitForm() {
    this.formFields = this.mFormBuilder.group({
      x: ["", Validators.required],
      y: ["", Validators.required],
    });
  }

  UpdateObject() {
    this.formFields.get("x").value;
    let x = this.formFields.value["x"];
    let y = this.formFields.value["y"];
    this.holoService.UpdateObject(x, y);
  }
}
