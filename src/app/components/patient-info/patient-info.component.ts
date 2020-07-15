import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  public patientId: string;
  public patientAge: string;
  public patientDiagnosis: string;
  public patientNotes: string;
  public editing: boolean;

  constructor(
    private currentUri: ActivatedRoute) { }

  ngOnInit() {
    this.patientId = this.currentUri.snapshot.paramMap.get('id');  // Get patient id from URI.

    this.patientAge = "60-65";
    this.patientDiagnosis = "Non-AD MCI (SEVERE)";
    this.patientNotes = "Has trouble remembering to pay their bills."
  }

}
