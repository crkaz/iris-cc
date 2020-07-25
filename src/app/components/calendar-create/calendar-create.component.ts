import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IrisService } from 'src/app/shared/services/iris/iris.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { ActivatedRoute } from '@angular/router';
import { ICalendarEntry, Repetition } from 'src/app/shared/models/ICalendarEntry';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';

@Component({
  selector: 'app-calendar-create',
  templateUrl: './calendar-create.component.html',
  styleUrls: ['./calendar-create.component.css'],
})
export class CalendarCreateComponent implements OnInit {
  private readonly defaultReminders: string[] = ["1:00", "0:30", "0:15"];
  public formFields: FormGroup;
  public reminders: string[];
  public repetitionEnum = this.utils.EnumToArray(Repetition);

  constructor(
    private formBuilder: FormBuilder,
    private iris: IrisService,
    private toast: ToastService,
    private currentUri: ActivatedRoute,
    private utils: UtilsService,
  ) { }

  ngOnInit() {
    this.reminders = [];
    // Addd default reminders.
    this.defaultReminders.forEach(reminder => {
      this.reminders.push(reminder);
    });
    this.InitForm();
  }

  InitForm() {
    this.formFields = this.formBuilder.group({
      fStart: ["", [Validators.required]],
      fEnd: ["",], // TODO: must be after or equal to start date.
      fRepeat: ["", [Validators.required]],
      fDescription: ["", [Validators.required]],
      fReminders: ["00:05", []]
    });
  }

  AddReminder() {
    let time: string = this.formFields.get('fReminders').value?.toLocaleString();

    if (time) {
      if (this.reminders.indexOf(time) == -1) { // not already in list found
        this.reminders.push(time);
      }
      else {
        // toast : already added a reminder for that time.
      }
    } {
      // toast: invalid time provided.
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
      Reminders: this.reminders,
      Description: this.formFields.get("fDescription").value,
    }
    this.iris.PostCalendarEntry(patientId, newEntry).subscribe(
      r => this.toast.Success("Created calendar entry successfully."),
      error => this.toast.Error(error.error));
  }
}
