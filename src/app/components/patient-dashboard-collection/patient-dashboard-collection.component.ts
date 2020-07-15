import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../../shared/models/patient';

@Component({
  selector: 'app-patient-dashboard-collection',
  templateUrl: './patient-dashboard-collection.component.html',
  styleUrls: ['./patient-dashboard-collection.component.css']
})
export class PatientDashboardCollectionComponent implements OnInit {
  @Input() title: string;
  @Input() colour: string;
  @Input() patients: Patient[];

  public colSize: number;

  constructor() { }

  ngOnInit(): void {
    this.SetColSize();
  }

  onResize(event) {
    this.SetColSize();
  }

  // Dynamically sets the number of columns for patient 'cards' on the dashboard, based on window width.
  private SetColSize(): void {
    const width = window.innerWidth;
    if (width >= 900) {
      this.colSize = width / 350;
    } else if (width <= 650) {
      this.colSize = 1;
    } else {
      this.colSize = 2;
    }
  }
}
