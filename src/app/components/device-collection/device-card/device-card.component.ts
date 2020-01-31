import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { UtilsService } from '../../../shared/services/utils/utils.service';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})
export class DeviceCardComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() userID: string;

  constructor(
    private router: Router, 
    ) { }

  ngOnInit() {
  }

  LoadPatientData() {
    this.router.navigate(["patient"]);
  }
}
