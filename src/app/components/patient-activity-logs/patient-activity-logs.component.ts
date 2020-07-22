import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { IActivityLog } from "../../shared/models/IActivityLog";
import { IrisService } from "src/app/shared/services/iris/iris.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-patient-activity-logs",
  templateUrl: "./patient-activity-logs.component.html",
  styleUrls: ["./patient-activity-logs.component.css"],
})
export class PatientActivityLogsComponent implements OnInit {
  displayedColumns: string[] = ["date", "time", "activity"];
  dataSource: MatTableDataSource<IActivityLog>;
  moreInfo: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private currentUri: ActivatedRoute, private iris: IrisService) {}

  async ngOnInit() {
    await this.LoadActivityLogs();
  }

  onPaginateChange(pagination) {
    this.LoadActivityLogs("all", pagination.pageSize);
  }

  private async LoadActivityLogs(
    pageIndex: string = "all",
    pageSize: string = "4"
  ) {
    const patientId = this.currentUri.snapshot.paramMap.get("id"); // Get patient id from URI.

    this.iris
      .GetPatientActivityLogs(patientId, pageIndex, pageSize)
      .subscribe((data: IActivityLog[]) => {
        data.sort((a, b) => (a.DateTime > b.DateTime ? -1 : 1)); // Sort ascending.
        this.dataSource = new MatTableDataSource<IActivityLog>(data);
        this.dataSource.paginator = this.paginator;
      });
  }

  public SelectLog(element: IActivityLog): void {
    this.moreInfo = element.JsonDescription;
  }
}
