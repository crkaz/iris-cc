import { Component, OnInit, OnDestroy } from "@angular/core";
import { IrisService } from "src/app/shared/services/iris/iris.service";
import { IPatient } from "../../shared/models/IPatient";
import { Observable, interval, timer } from "rxjs";
import { PlotLineOrBand } from "highcharts";
import { ToastService } from 'src/app/shared/services/toast/toast.service';

const POLLING_RATE: number = 3000;

@Component({
  selector: "app-patient-dashboard",
  templateUrl: "./patient-dashboard.component.html",
  styleUrls: ["./patient-dashboard.component.css"],
})
export class PatientDashboardComponent implements OnInit, OnDestroy {
  public alertPatients: IPatient[] = [];
  public onlinePatients: IPatient[] = [];
  public offlinePatients: IPatient[] = [];
  public connected: boolean = false;
  private timer;
  private subscriber;

  constructor(private iris: IrisService, private toast: ToastService) {}

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngOnInit(): void {
    this.ObservePatients();
  }

  private ObservePatients(): void {
    // Load/observe patients on the server.
    this.timer = timer(0, POLLING_RATE);
    this.subscriber = this.timer.subscribe(() => {
      this.iris.GetPatients().subscribe((data: IPatient[]) => {
        this.alertPatients = [];
        this.onlinePatients = [];
        this.offlinePatients = [];
        this.connected = true;
        data.forEach((patient: IPatient) => {
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
        }),
          (error) => this.toast.Error(error.error);
      });
    });
  }
}
