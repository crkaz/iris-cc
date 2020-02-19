import { Component, OnInit } from '@angular/core';
import { IrisService } from 'src/app/shared/services/iris/iris.service';

@Component({
  selector: 'app-device-config',
  templateUrl: './device-config.component.html',
  styleUrls: ['./device-config.component.css']
})
export class DeviceConfigComponent implements OnInit {
  constructor(private iris: IrisService) { }

  ngOnInit() {
  }

}
