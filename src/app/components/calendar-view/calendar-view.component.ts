import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ICalendarEntry } from "../../shared/models/ICalendarEntry";
import { IrisService } from "src/app/shared/services/iris/iris.service";
import { ActivatedRoute } from "@angular/router";
import { ToastService } from "src/app/shared/services/toast/toast.service";

@Component({
  selector: "app-calendar-view",
  templateUrl: "./calendar-view.component.html",
  styleUrls: ["./calendar-view.component.css"],
})
export class CalendarViewComponent implements OnInit {
  @Output() editClicked: EventEmitter<ICalendarEntry> = new EventEmitter<
    ICalendarEntry
  >();
  displayedColumns: string[] = ["date", "time", "description", "tools"];
  dataSource: MatTableDataSource<ICalendarEntry>;
  loaded: boolean = false;
  entriesExist: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private currentUri: ActivatedRoute,
    private iris: IrisService,
    private toast: ToastService
  ) {}

  async ngOnInit() {
    await this.LoadCalendarEntries();
  }

  private async LoadCalendarEntries(
    pageIndex: string = "all",
    pageSize: string = "5"
  ) {
    const patientId = this.currentUri.snapshot.paramMap.get("id"); // Get patient id from URI.

    this.iris
      .GetPatientCalendar(patientId, pageIndex, pageSize)
      .subscribe((data: ICalendarEntry[]) => {
        if (data.length > 0) {
          this.entriesExist = true;
        } else {
          this.entriesExist = false;
        }
        data.sort((a, b) => (a.Start > b.Start ? 1 : -1)); // Sort ascending (soonest events first).
        this.dataSource = new MatTableDataSource<ICalendarEntry>(data);
        this.dataSource.paginator = this.paginator;
        this.loaded = true;
      }),
      (error) => this.toast.Error(error.error);
  }

  public DeleteEntry(entryId: string) {
    this.iris.DeleteCalendarEntry(entryId).subscribe(
      (r) => {
        this.toast.Success("Deleted successfully.");
        this.LoadCalendarEntries();
      },
      (error) => this.toast.Error(error.error)
    );
  }

  public EditEntry(entry: ICalendarEntry) {
    this.editClicked.emit(entry);
  }
}
