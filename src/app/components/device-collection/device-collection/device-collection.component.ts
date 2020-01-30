import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device-collection',
  templateUrl: './device-collection.component.html',
  styleUrls: ['./device-collection.component.css']
})
export class DeviceCollectionComponent implements OnInit {
  @Input() title: string;

  public placeholderIconPath: string = "../../../../assets/icons/x-circle.svg";
  public devices: any[];
  public nCols: number;

  constructor() {
    this.devices = [];
  }

  ngOnInit() {
    this.CalculateNCols(); // Initialise mat-grids columns.
    // MOCK DATA
    for (var i = 0; i < 3; ++i) {
      // this.devices.push(new String("lol"));
    }
    //\
  }

  /** Set the number of tile columns in the mat-grid, based on the current window with. */
  CalculateNCols() {
    const width = window.innerWidth;
    this.nCols = width / 350;
    if (this.nCols <= 1) this.nCols = 1;
  }
}
