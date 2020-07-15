import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';
import { MatGridList } from '@angular/material/grid-list';

@Component({
  selector: 'app-calendar-panel',
  templateUrl: './calendar-panel.component.html',
  styleUrls: ['./calendar-panel.component.css']
})
export class CalendarPanelComponent implements OnInit {
  @Input() toggleButtons: MatGridList;
  private sectionHeight: number;
  public creating: boolean;

  constructor(private utils: UtilsService) { }

  get SectionHeight(): number { return this.sectionHeight; }
  set SectionHeight(value: number) { this.sectionHeight = value; }

  async ngOnInit() {
    this.creating = false;
    await this.utils.Delay(1000); // Wait for page content to load before calculating content height; afterViewInit doesn't work.
    this.SetSectionHeight();
  }

  OnResize(event) {
    this.SetSectionHeight();
  }

  // Fit content with.
  SetSectionHeight() {
    // @ts-ignore
    let toggleButtonsHeight = this.toggleButtons._element.nativeElement.offsetHeight;
    this.sectionHeight = 380 - toggleButtonsHeight;
  }
}
