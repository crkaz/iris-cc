import { Component, OnInit } from '@angular/core';
import { Patient } from '../../shared/models/patient';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  public patients: Patient[];
  public alertPatients: Patient[];
  public onlinePatients: Patient[];
  public offlinePatients: Patient[];

  constructor() { }

  ngOnInit() {
    // Load/observe patients on the server.
    console.log("loaded patients");
    this.patients = [];
    this.alertPatients = [];
    this.onlinePatients = [];
    this.offlinePatients = [];

    this.patients.push(new Patient("643621", "00:56 28th Jun 2020", "bathroom", "PATIENT HAS FALLEN", "alert"));
    this.patients.push(new Patient("235235", "00:56 28th Jun 2020", "bathroom", "CREATED STICKY NOTE", "online"));
    this.patients.push(new Patient("182409", "00:56 28th Jun 2020", "bathroom", "CHECKED CALENDAR", "online"));
    // this.patients.push(new Patient("102984", "00:56 28th Jun 2020", "bathroom", "SIGNED OFF", "offline"));

    this.patients.forEach(patient => {
      switch (patient.Status) {
        case "alert":
          this.alertPatients.push(patient);
          break;
        case "online":
          this.onlinePatients.push(patient);
          break;
        case "offline":
          this.offlinePatients.push(patient);
          break;
      }
    });
  }
}
