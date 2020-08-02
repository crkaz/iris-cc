import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IrisService } from "src/app/shared/services/iris/iris.service";
import { ToastService } from "src/app/shared/services/toast/toast.service";
import { ActivatedRoute } from "@angular/router";
import {
  ICalendarEntry,
  Repetition,
} from "src/app/shared/models/ICalendarEntry";
import { UtilsService } from "src/app/shared/services/utils/utils.service";

@Component({
  selector: "app-calendar-create",
  templateUrl: "./calendar-create.component.html",
  styleUrls: ["./calendar-create.component.css"],
})
export class CalendarCreateComponent implements OnInit {
  @Input() editing: ICalendarEntry;
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  public formFields: FormGroup;
  public reminders: string[] = ["1:00", "0:30", "0:15"];
  public repetitionEnum = this.utils.EnumToArray(Repetition);

  constructor(
    private formBuilder: FormBuilder,
    private iris: IrisService,
    private toast: ToastService,
    private currentUri: ActivatedRoute,
    private utils: UtilsService
  ) {}

  ngOnInit() {
    this.InitForm();
  }

  InitForm() {
    if (this.editing) {
      // EDIT MODE.
      if (this.editing.Reminders) {
        this.reminders = this.editing.Reminders.split(",");
      } else {
        this.reminders = [];
      }
      this.formFields = this.formBuilder.group({
        fStart: [this.editing.Start, [Validators.required]],
        fEnd: [this.editing.End], // TODO: must be after or equal to start date.
        fRepeat: [this.editing.Repeat, [Validators.required]],
        fDescription: [this.editing.Description, [Validators.required]],
        fReminders: ["", []],
      });
    } else {
      // CREATION MODE.
      this.formFields = this.formBuilder.group({
        fStart: ["", [Validators.required]],
        fEnd: [""], // TODO: must be after or equal to start date.
        fRepeat: ["", [Validators.required]],
        fDescription: ["", [Validators.required]],
        fReminders: ["00:05", []],
      });
    }
  }

  AddReminder() {
    let time: string = this.formFields
      .get("fReminders")
      .value?.toLocaleString();

    if (time) {
      if (this.reminders.indexOf(time) == -1) {
        // not already in list found
        this.reminders.push(time);
      } else {
        this.toast.Error("Already added a reminder for that time.");
      }
    } else {
      this.toast.Error("Invalid value for time provided.");
    }
  }

  RemoveReminder(reminder): void {
    const index = this.reminders.indexOf(reminder);

    if (index >= 0) {
      this.reminders.splice(index, 1);
    }
  }

  CreateCalendarEntry() {
    const patientId = this.currentUri.snapshot.paramMap.get("id"); // Get patient id from URI.
    const newEntry: ICalendarEntry = {
      Start: this.formFields.get("fStart").value.toLocaleString(),
      End: this.formFields.get("fEnd").value.toLocaleString(),
      Repeat: this.formFields.get("fRepeat").value,
      Reminders: this.reminders.join(","),
      Description: this.formFields.get("fDescription").value,
    };
    if (this.editing) {
      // EDIT MODE
      this.iris.PutCalendarEntry(this.editing["Id"], newEntry).subscribe(
        (r) => {
          this.toast.Success("Entry updated successfully.");
          this.Return();
        },
        (error) => {
          this.toast.Error(error.error);
          console.log(error);
        }
      );
    } else {
      // CREATE MODE
      this.iris.PostCalendarEntry(patientId, newEntry).subscribe(
        (r) => {
          this.toast.Success("Created calendar entry successfully.");
          this.Return();
        },
        (error) => {
          this.toast.Error(error.error);
          console.log(error);
        }
      );
    }
  }

  Return() {
    this.buttonClicked.emit(true);
  }
}
