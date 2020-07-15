import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';

@Component({
  selector: 'app-settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.css']
})
export class SettingsPanelComponent implements OnInit {
  @Input() toggleButtons: MatGridList;
  private sectionHeight: number;

  constructor(private utils: UtilsService) { }

  get SectionHeight(): number { return this.sectionHeight; }
  set SectionHeight(value: number) { this.sectionHeight = value; }

  async ngOnInit() {
    await this.utils.Delay(1000); // Wait for page content to load before calculating content height; afterViewInit doesn't work.
    this.SetSectionHeight();
  }

  onResize(event) {
    this.SetSectionHeight();
  }

  // Fit content with.
  SetSectionHeight() {
    // @ts-ignore
    let toggleButtonsHeight = this.toggleButtons._element.nativeElement.offsetHeight;
    this.sectionHeight = 380 - toggleButtonsHeight;
  }

}
