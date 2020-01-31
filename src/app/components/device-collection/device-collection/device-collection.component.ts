import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { IDeviceCollection } from '../../../shared/models/IDeviceCollection';
import { IrisService } from '../../../shared/services/iris/iris.service';

@Component({
  selector: 'app-device-collection',
  templateUrl: './device-collection.component.html',
  styleUrls: ['./device-collection.component.css']
})
export class DeviceCollectionComponent implements OnInit {
  @Input() collection: IDeviceCollection;
  @Input() fbKey: String;

  public placeholderIconPath: string = "../../../../assets/icons/x-circle.svg";
  public users: any[];
  public nCols: number;

  constructor(public irisService: IrisService) {
    this.users = []; // Reinit list.
  }

  ngOnInit() {
    this.CalculateNCols(); // Initialise mat-grids columns.

    // Subscribe to firebase collection.
    this.irisService.GetObject("/users").snapshotChanges()
      .subscribe(data => {
        this.users = []; // Reinit list.
        const users = data.payload.toJSON(); // Get users.

        // Get users that fit this collection.
        for (const key in users) {
          const status = users[key];
          if (status == this.fbKey) {
            this.users.push(key);
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
}
