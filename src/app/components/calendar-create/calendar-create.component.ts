import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calendar-create',
  templateUrl: './calendar-create.component.html',
  styleUrls: ['./calendar-create.component.css'],
})
export class CalendarCreateComponent implements OnInit {
  private readonly defaultReminders: string[] = ["1:00", "0:30", "0:15"];
  public formFields: FormGroup;
  public reminders: string[];

  constructor(
    private formBuilder: FormBuilder,
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
      startTimePicker: ["", [Validators.required]],
      endTimePicker: ["", [Validators.required]],
      repeatSelect: ["", [Validators.required]],
      descriptionTextArea: ["", [Validators.required]],
      remindersTimePicker: ["00:05", []]
    });
  }

  AddReminder() {
    let time: string = this.formFields.get('remindersTimePicker').value?.toLocaleString();

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
}
