import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../../shared/models/patient';

@Component({
  selector: 'app-patient-dashboard-card',
  templateUrl: './patient-dashboard-card.component.html',
  styleUrls: ['./patient-dashboard-card.component.css']
})
export class PatientDashboardCardComponent implements OnInit {
  @Input() patient: Patient;

  constructor() { }

  ngOnInit() {
  }
}
