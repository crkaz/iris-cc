import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { IActivityLog } from "../../shared/models/IActivityLog";
import { IrisService } from "src/app/shared/services/iris/iris.service";
import { ActivatedRoute } from "@angular/router";
import { ToastService } from "src/app/shared/services/toast/toast.service";
import { timer } from "rxjs";

const POLLING_RATE: number = 3000;

@Component({
  selector: "app-patient-activity-logs",
  templateUrl: "./patient-activity-logs.component.html",
  styleUrls: ["./patient-activity-logs.component.css"],
})
export class PatientActivityLogsComponent implements OnInit {
  displayedColumns: string[] = ["date", "time", "activity"];
  dataSource: MatTableDataSource<IActivityLog>;
  moreInfo: string;
  loaded: boolean = false;
  entriesExist: boolean = false;
  private timer;
  private subscriber;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private currentUri: ActivatedRoute,
    private iris: IrisService,
    private toast: ToastService
  ) {}

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngOnInit() {
    this.LoadActivityLogs();
  }

  private LoadActivityLogs(pageIndex: string = "all", pageSize: string = "4") {
    const patientId = this.currentUri.snapshot.paramMap.get("id"); // Get patient id from URI.

    // Load/observe colleciton on the server.
    this.timer = timer(0, POLLING_RATE);
    this.subscriber = this.timer.subscribe(() => {
      this.iris
        .GetPatientActivityLogs(patientId, pageIndex, pageSize)
        .subscribe((data: IActivityLog[]) => {
          if (data.length > 0) {
            this.entriesExist = true;
          } else {
            this.entriesExist = false;
          }
          data.sort((a, b) => (a.DateTime > b.DateTime ? -1 : 1)); // Sort ascending.
          this.dataSource = new MatTableDataSource<IActivityLog>(data);
          this.dataSource.paginator = this.paginator;
          this.loaded = true;
        }),
        (error) => this.toast.Error(error.error);
    });
  }

  public SelectLog(element: IActivityLog): void {
    this.moreInfo = element.JsonDescription;
  }
}
