import { Component, OnInit, Input } from '@angular/core';
import { IPatient } from 'src/app/shared/models/IPatient';

@Component({
  selector: 'app-patient-dashboard-card',
  templateUrl: './patient-dashboard-card.component.html',
  styleUrls: ['./patient-dashboard-card.component.css']
})
export class PatientDashboardCardComponent implements OnInit {
  @Input() patient: IPatient;

  constructor() { }

  ngOnInit() {
  }
}
