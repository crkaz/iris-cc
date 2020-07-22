import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IrisService } from "src/app/shared/services/iris/iris.service";
import {
  IPatientInfo,
  AgeRange,
  Severity,
} from "src/app/shared/models/IPatientInfo";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UtilsService } from "src/app/shared/services/utils/utils.service";
import { ToastService } from "src/app/shared/services/toast/toast.service";

@Component({
  selector: "app-patient-info",
  templateUrl: "./patient-info.component.html",
  styleUrls: ["./patient-info.component.css"],
})
export class PatientInfoComponent implements OnInit {
  public formFields: FormGroup;
  public patient: IPatientInfo = { Id: "", Age: 0, Diagnosis: 0, Notes: "" };
  public editing: boolean = false;
  public ageRangeEnum = this.utils.EnumToArray(AgeRange);
  public diagnosisEnum = this.utils.EnumToArray(Severity);

  constructor(
    private currentUri: ActivatedRoute,
    private iris: IrisService,
    private formBuilder: FormBuilder,
    private utils: UtilsService,
    private toast: ToastService
  ) {}

  get Age() {
    return AgeRange[this.patient.Age];
  }
  get Diagnosis() {
    return Severity[this.patient.Diagnosis];
  }

  ngOnInit() {
    const patientId = this.currentUri.snapshot.paramMap.get("id"); // Get patient id from URI.

    // Get patient infor from iris-serer.
    this.iris.GetPatientInfo(patientId).subscribe(
      (data: IPatientInfo) =>
        (this.patient = {
          Id: patientId,
          Age: data["age"],
          Diagnosis: data["diagnosis"],
          Notes: data["notes"],
        })
    );

    this.InitForm();
  }

  InitForm() {
    this.formFields = this.formBuilder.group({
      fAge: [this.patient.Age],
      fDiagnosis: [this.patient.Diagnosis],
      fNotes: [this.patient.Notes],
    });
  }

  public Edit() {
    const patientId = this.currentUri.snapshot.paramMap.get("id"); // Get patient id from URI.
    if (this.editing) {
      this.patient.Age = this.formFields.get("fAge").value;
      this.patient.Diagnosis = this.formFields.get("fDiagnosis").value;
      this.patient.Notes = this.formFields.get("fNotes").value;
      this.iris
        .UpdatePatientNotes(patientId, this.patient)
        .subscribe((r) => this.toast.HandleResponse(r, "Updated patient successfully."));
    } else {
      this.InitForm();
    }
    this.editing = !this.editing;
  }
}
