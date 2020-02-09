import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-dash-tile',
  templateUrl: './dash-tile.component.html',
  styleUrls: ['./dash-tile.component.css']
})
export class DashTileComponent implements OnInit {
  @Input() backgroundColour: string;
  @Input() header: string;
  @Input() footer: string;
  @Input() imgPath: string;
  @Input() text: string;
  @Input() onClick: Function;

  constructor() { }

  ngOnInit() {
  }

  Callback() {
    // If a click function has been defined, call it.
    if (!isNullOrUndefined(this.onClick)) {
      this.onClick();
    }
  }
}
