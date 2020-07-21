import { Component, OnInit } from "@angular/core";
import { IrisService } from "src/app/shared/services/iris/iris.service";
import { IPatient } from "../../shared/models/IPatient";

@Component({
  selector: "app-patient-dashboard",
  templateUrl: "./patient-dashboard.component.html",
  styleUrls: ["./patient-dashboard.component.css"],
})
export class PatientDashboardComponent implements OnInit {
  public patients: IPatient[];
  // public patients: Patient[];
  public alertPatients: IPatient[];
  public onlinePatients: IPatient[];
  public offlinePatients: IPatient[];

  constructor(private iris: IrisService) {}

  ngOnInit() {
    // Load/observe patients on the server.
    // this.iris.GetPatients().subscribe((data) => (this.patients2 = data));

    // Get patient infor from iris-serer.
    // this.iris.GetPatients().subscribe((data) => console.log(data));
    this.iris.GetPatients().subscribe((data: IPatient[]) => {
      this.patients = [];
      this.alertPatients = [];
      this.onlinePatients = [];
      this.offlinePatients = [];
      data.forEach((patient: IPatient) => {
        console.log(patient);
        switch (patient.status) {
          case "alert":
            this.alertPatients.push(patient);
            break;
          case "online":
            this.onlinePatients.push(patient);
            break;
          case "offline":
            this.offlinePatients.push(patient);
            break;
        }
      });
    });

    // (this.patients = {
    //   Id: patientId,
    //   Age: AgeRange[data["age"]],
    //   Diagnosis: Severity[data["diagnosis"]],
    //   Notes: data["notes"],
    // })

    // this.patients = [];
    // this.alertPatients = [];
    // this.onlinePatients = [];
    // this.offlinePatients = [];

    // this.patients.push(
    //   new IPatient(
    //     "643621",
    //     "00:56 28th Jun 2020",
    //     "bathroom",
    //     "PATIENT HAS FALLEN",
    //     "alert"
    //   )
    // );
    // this.patients.push(
    //   new Patient(
    //     "testpatient",
    //     "00:56 28th Jun 2020",
    //     "bathroom",
    //     "CREATED STICKY NOTE",
    //     "online"
    //   )
    // );
    // this.patients.push(
    //   new Patient(
    //     "235235",
    //     "00:56 28th Jun 2020",
    //     "bathroom",
    //     "CREATED STICKY NOTE",
    //     "online"
    //   )
    // );
    // this.patients.push(
    //   new Patient(
    //     "182409",
    //     "00:56 28th Jun 2020",
    //     "bathroom",
    //     "CHECKED CALENDAR",
    //     "offline"
    //   )
    // );
    // this.patients.push(new Patient("102984", "00:56 28th Jun 2020", "bathroom", "SIGNED OFF", "offline"));
  }
}
