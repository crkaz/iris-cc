import { Component, OnInit } from '@angular/core';
import { IrisService } from 'src/app/shared/services/iris/iris.service';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  constructor(
    private irisService: IrisService,
    private toastr: ToastService,
    private location: Location,
    private utils: UtilsService) {
  }

  ngOnInit() {
    this.CheckPatientSelected();
  }

  // @TODO: this should be a guard.
  /** Return to the dashboard if the irisService doesn't have a selected patient. */
  private async CheckPatientSelected() {
    // Delay is required because of asynchronous operations.
    await this.utils.Delay(100).then(
      _ => {
        let pat = this.irisService.SelectedPatient;
        if (!pat) {
          this.toastr.Error("Please select a patient.");
          this.location.back();
        }
      }
    );
  }
}
