import { Component, OnInit } from "@angular/core";
import { ToastService } from "src/app/shared/services/toast/toast.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { IrisService } from "src/app/shared/services/iris/iris.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-patient-delete",
  templateUrl: "./patient-delete.component.html",
  styleUrls: ["./patient-delete.component.css"],
})
export class PatientDeleteComponent implements OnInit {
  public formFields: FormGroup;
  public dialogTitle: string;
  public dialogMessage: string;
  private confirmedDelete: boolean;

  constructor(
    public toast: ToastService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private iris: IrisService,
    private currentUri: ActivatedRoute
  ) {}

  ngOnInit() {
    this.InitForm();
    this.dialogTitle = "Confirm";
    this.dialogMessage =
      "Are you sure you want to delete the patient? All data associated with the patient and their device will be lost.";
  }

  InitForm() {
    this.formFields = this.formBuilder.group({
      fPatId: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  OpenConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: this.dialogTitle, message: this.dialogMessage },
    });

    dialogRef.afterClosed().subscribe((confirm) => {
      if (confirm) {
        this.DeletePatient();
      }
    });
  }

  private DeletePatient() {
    this.iris.DeletePatient(this.formFields.get("fPatId").value).subscribe(
      (r) => this.toast.Success("Patient deleted successfully."),
      (error) => this.toast.Error(error.error)
    );
  }
}
