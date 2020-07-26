import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ICarer } from "../../shared/models/ICarer";
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER, SPACE } from "@angular/cdk/keycodes";
import { IrisService } from "src/app/shared/services/iris/iris.service";
import { ToastService } from "src/app/shared/services/toast/toast.service";

@Component({
  selector: "app-carers-list",
  templateUrl: "./carers-list.component.html",
  styleUrls: ["./carers-list.component.css"],
})
export class CarersListComponent implements OnInit {
  public loaded: boolean = false;
  displayedColumns: string[] = ["username", "role", "assignedPatients"];
  selectedRole: string = "formal";
  dataSource: MatTableDataSource<ICarer>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];

  constructor(private iris: IrisService, private toast: ToastService) { }

  async ngOnInit() {
    await this.LoadCarers();
  }

  private async LoadCarers(pageIndex: string = "all", pageSize: string = "4") {
    this.iris.GetCarers().subscribe((data: any[]) => {
      let collection: ICarer[] = [];
      data.forEach((carer) => {
        let newVal: ICarer = {
          email: carer["Email"],
          patients: carer["AssignedPatientIds"]
            ? (carer["AssignedPatientIds"].includes(",") ? carer["AssignedPatientIds"].split(",") : carer["AssignedPatientIds"])
            : [], // Split comma separated list if there is more than one element.
          role: carer["User"]["Role"],
        };
        collection.push(newVal);
      });
      this.dataSource = new MatTableDataSource<ICarer>(collection);
      this.dataSource.paginator = this.paginator;
      this.loaded = true;
    }),
      (error) => this.toast.Error(error.message);
  }

  Assign(event: MatChipInputEvent, carer: ICarer): void {
    const input = event.input;
    const value = event.value;
    // Add patient to carer's patient collection.
    if ((value || "").trim()) {
      let requestBody = { patient: value, carer: carer.email, assign: true };
      this.iris.AllocatePatient(requestBody).subscribe(
        (r) => {
          this.toast.Success("Assigned patient successfully.");
          this.LoadCarers();
        },
        (error) => this.toast.Error(error.error)
      );
    }
    // Reset the input value.
    if (input) {
      input.value = "";
    }
  }

  // UnassignPatient(carerId: string, patientId: string): void {
  Unassign(carer: ICarer, patientId: string): void {
    let requestBody = { patient: patientId, carer: carer.email, assign: false };
    this.iris.AllocatePatient(requestBody).subscribe(
      (r) => {
        this.toast.Success("Unassigned patient successfully.");
        // Remove from view without another request.
        const index = carer.patients.indexOf(patientId);
        if (index >= 0) {
          carer.patients.splice(index, 1);
        }
      },
      (error) => this.toast.Error(error.error)
    );
  }
}
