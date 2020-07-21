import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IrisService } from "src/app/shared/services/iris/iris.service";
import {
  IPatientInfo,
  AgeRange,
  Severity,
} from "src/app/shared/models/IPatientInfo";

@Component({
  selector: "app-patient-info",
  templateUrl: "./patient-info.component.html",
  styleUrls: ["./patient-info.component.css"],
})
export class PatientInfoComponent implements OnInit {
  public patient: IPatientInfo = { Id: "", Age: "", Diagnosis: "", Notes: "" };

  constructor(private currentUri: ActivatedRoute, private iris: IrisService) {}

  ngOnInit() {
    const patientId = this.currentUri.snapshot.paramMap.get("id"); // Get patient id from URI.

    // Get patient infor from iris-serer.
    this.iris.GetPatientInfo(patientId).subscribe(
      (data: IPatientInfo) =>
        (this.patient = {
          Id: patientId,
          Age: AgeRange[data["age"]],
          Diagnosis: Severity[data["diagnosis"]],
          Notes: data["notes"],
        })
    );
  }
}
