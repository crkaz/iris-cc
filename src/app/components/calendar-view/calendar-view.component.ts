import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ICalendarEntry } from "../../shared/models/ICalendarEntry";
import { IrisService } from "src/app/shared/services/iris/iris.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-calendar-view",
  templateUrl: "./calendar-view.component.html",
  styleUrls: ["./calendar-view.component.css"],
})
export class CalendarViewComponent implements OnInit {
  displayedColumns: string[] = ["date", "time", "description", "tools"];
  dataSource: MatTableDataSource<ICalendarEntry>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private currentUri: ActivatedRoute, private iris: IrisService) {}

  async ngOnInit() {
    await this.LoadCalendarEntries();
  }

  onPaginateChange(pagination) {
    this.LoadCalendarEntries("all", pagination.pageSize);
  }

  private async LoadCalendarEntries(
    pageIndex: string = "all",
    pageSize: string = "5"
  ) {
    const patientId = this.currentUri.snapshot.paramMap.get("id"); // Get patient id from URI.

    this.iris
      .GetPatientCalendar(patientId, pageIndex, pageSize)
      .subscribe((data: ICalendarEntry[]) => {
        data.sort((a, b) => (a.Start > b.Start ? 1 : -1)); // Sort ascending (soonest events first).
        this.dataSource = new MatTableDataSource<ICalendarEntry>(data);
        this.dataSource.paginator = this.paginator;
      });
  }
}
