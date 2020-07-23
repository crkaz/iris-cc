import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatGridList } from "@angular/material/grid-list";
import { UtilsService } from "src/app/shared/services/utils/utils.service";
import { IrisService } from "src/app/shared/services/iris/iris.service";
import { ActivatedRoute } from "@angular/router";
import { IMessage } from "../../shared/models/IMessage";
import { ToastService } from "src/app/shared/services/toast/toast.service";

@Component({
  selector: "app-messaging-panel",
  templateUrl: "./messaging-panel.component.html",
  styleUrls: ["./messaging-panel.component.css"],
})
export class MessagingPanelComponent implements OnInit {
  public formFields: FormGroup;
  public messageSent: boolean = false;
  @Input() toggleButtons: MatGridList;
  private sectionHeight: number;

  constructor(
    private formBuilder: FormBuilder,
    private utils: UtilsService,
    private iris: IrisService,
    private currentUri: ActivatedRoute,
    private toast: ToastService
  ) {}

  get SectionHeight(): number {
    return this.sectionHeight;
  }
  set SectionHeight(value: number) {
    this.sectionHeight = value;
  }

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
    let toggleButtonsHeight = this.toggleButtons._element.nativeElement
      .offsetHeight;
    this.sectionHeight = 380 - toggleButtonsHeight;
  }

  InitForm(): void {
    this.formFields = this.formBuilder.group({
      fTitle: ["", [Validators.required]],
      fMessage: ["", Validators.required],
    });
  }

  public SendMessage(): void {
    const patientId = this.currentUri.snapshot.paramMap.get("id"); // Get patient id from URI.
    const requestBody: IMessage = {
      Title: this.formFields.get("fTitle").value,
      Message: this.formFields.get("fMessage").value,
    };
    this.iris.PostPatientMessage(patientId, requestBody).subscribe(
      (r) => {
        this.toast.Success("Message sent successfully.");
        this.messageSent = true;
      },
      (error) => {
        this.toast.Error(error.error);
        this.messageSent = false;
      }
    );
  }
}
