import { Component, OnInit } from '@angular/core';
import { IPatient } from 'src/app/shared/models/IPatient';
import { IrisService } from 'src/app/shared/services/iris/iris.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  public selectedPatient: IPatient; // HTML binding.

  constructor(private irisService: IrisService) {
    this.selectedPatient = this.irisService.SelectedPatient;
  }

  ngOnInit() {
  }
}
