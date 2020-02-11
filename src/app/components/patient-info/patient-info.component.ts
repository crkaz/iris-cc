import { Component, OnInit } from '@angular/core';
import { IrisService } from 'src/app/shared/services/iris/iris.service';
import { Location } from '@angular/common';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  constructor(
    private irisService: IrisService,
    private toastr: ToastService,
    private location: Location,
    private utils: UtilsService) {
  }

  ngOnInit() {
    this.CheckPatientSelected();
  }


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

  private get PatientInfo() {
    try {
      return this.irisService.SelectedPatient.info;
    }
    catch{
      // Still loading.
      return "";
    }
  }
}
