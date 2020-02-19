import { Component, OnInit } from '@angular/core';
import { IrisService } from 'src/app/shared/services/iris/iris.service';
import { IConfig } from 'src/app/shared/models/IPatient';

@Component({
  selector: 'app-device-config',
  templateUrl: './device-config.component.html',
  styleUrls: ['./device-config.component.css']
})
export class DeviceConfigComponent implements OnInit {
  constructor(public iris: IrisService) { }

  ngOnInit() {
  }

  public SaveConfig() {
    // @TODO: needs to pull from form.
    let config: IConfig = {
      gazeInput: { enabled: true, sensitivity: 10 },
      gestureInput: { enabled: true },
      speechInput: { enabled: true },
    }

    this.iris.UpdateObj("config", config); // Update fb object for this patient.
  }

}
