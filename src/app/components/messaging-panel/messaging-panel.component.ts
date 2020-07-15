import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatGridList } from '@angular/material/grid-list';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';

@Component({
  selector: 'app-messaging-panel',
  templateUrl: './messaging-panel.component.html',
  styleUrls: ['./messaging-panel.component.css']
})
export class MessagingPanelComponent implements OnInit {
  public formFields: FormGroup;
  @Input() toggleButtons: MatGridList;
  private sectionHeight: number;

  constructor(
    private formBuilder: FormBuilder,
    private utils: UtilsService) { }

  get SectionHeight(): number { return this.sectionHeight; }
  set SectionHeight(value: number) { this.sectionHeight = value; }

  async ngOnInit() {
    this.InitForm();
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

  InitForm() {
    this.formFields = this.formBuilder.group({
      fTitle: ["", [Validators.required]],
      fMessage: ["", Validators.required]
    });
  }

}
