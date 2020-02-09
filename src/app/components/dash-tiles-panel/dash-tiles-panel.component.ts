import { Component, OnInit } from '@angular/core';
import { IDashTile } from 'src/app/shared/models/IDashTile';

const ASSET_PATH: string = "../../../../assets/icons/";

@Component({
  selector: 'app-dash-tiles-panel',
  templateUrl: './dash-tiles-panel.component.html',
  styleUrls: ['./dash-tiles-panel.component.css']
})
export class DashTilesPanelComponent implements OnInit {
  tiles: IDashTile[];

  constructor() {
    this.tiles = [
      {
        colSpan: "1",
        backgroundColour: "#ffd740",
        header: undefined,
        footer: undefined,
        imgPath: ASSET_PATH + "settings.svg",
        text: undefined,
        onClick: function () { },
      },
      {
        colSpan: "1",
        backgroundColour: "#ffd740",
        header: undefined,
        footer: undefined,
        imgPath: ASSET_PATH + "alert-octagon.svg",
        text: undefined,
        onClick: function () { },
      },
      {
        colSpan: "1",
        backgroundColour: "#ffd740",
        header: undefined,
        footer: undefined,
        imgPath: ASSET_PATH + "x-circle.svg",
        text: undefined,
        onClick: function () { },
      },
    ];
  }

  ngOnInit() {
  }
}
