import { Component, OnInit } from '@angular/core';
import { IrisService } from 'src/app/shared/services/iris/iris.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  constructor(private iris: IrisService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
