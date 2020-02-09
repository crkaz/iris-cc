import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { IDeviceCollection } from '../../shared/models/IDeviceCollection';
import { IrisService } from '../../shared/services/iris/iris.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-collection',
  templateUrl: './device-collection.component.html',
  styleUrls: ['./device-collection.component.css']
})
export class DeviceCollectionComponent implements OnInit {
  @Input() collection: IDeviceCollection;
  @Input() fbKey: String;

  public placeholderIconPath: string = "../../../../assets/icons/x-circle.svg";
  public patients: any[];
  public nCols: number;

  constructor(
    public irisService: IrisService,
    private router: Router,
  ) {
    this.patients = []; // Reinit list.
  }

  ngOnInit() {
    this.CalculateNCols(); // Initialise mat-grids columns.

    // Subscribe to firebase collection.
    this.irisService.GetObject("/patients").snapshotChanges()
      .subscribe(data => {
        this.patients = []; // Reinit list.
        const patients = data.payload.toJSON(); // Get patients.

        // Get patients that fit this collection.
        for (const key in patients) {
          const status = patients[key]["status"];
          if (status == this.fbKey) {
            this.patients.push(key);
          }
        }
      });
  }

  /** Set the number of tile columns in the mat-grid, based on the current window with. */
  CalculateNCols() {
    const width = window.innerWidth;
    this.nCols = width / 350;
    if (this.nCols <= 1) this.nCols = 1;
  }

  LoadPatient(patientUID: string) {
    // @TODO: Make specific  patient.
    this.irisService.LoadPatient(patientUID)
    this.router.navigate(["patient"])
  }
}
