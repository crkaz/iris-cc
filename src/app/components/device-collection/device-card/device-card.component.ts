import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})
export class DeviceCardComponent implements OnInit {
  @Input() backgroundColor: string;

  constructor() { }

  ngOnInit() {
  }

}
