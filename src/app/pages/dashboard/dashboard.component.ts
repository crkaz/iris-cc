import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IrisService } from '../../shared/services/iris/iris.service';
import { ToastService } from '../../shared/services/toast/toast.service';
import { UtilsService } from '../../shared/services/utils/utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public formFields: FormGroup;
  public fromUnity: any[];
  public users: any[]; // List of devices from firebase.

  constructor(
    private irisService: IrisService,
    public toastService: ToastService,
    private mFormBuilder: FormBuilder,
    public utils: UtilsService, // Used in html.
  ) { }

  ngOnInit() {
    // Unity experiment.
    this.irisService
      .GetObject("/layout")
      .snapshotChanges()
      .subscribe(data => {
        let layout = data.payload.toJSON(); // Protocols list
        this.fromUnity = []; // Re-init list.
        for (var key in layout) {
          let coord = layout[key];
          this.fromUnity.push(coord);
        }
      });

      // Get devices/IRIS users.
      this.irisService
      .GetObject("/users")
      .snapshotChanges()
      .subscribe(data => {
        let users = data.payload.toJSON(); // Protocols list
        this.users = []; // Re-init list.
        for (var key in users) {
          let user = users[key];
          this.users.push(user);
        }
      });

    this.InitForm();
  }

  InitForm() {
    this.formFields = this.mFormBuilder.group({
      x: ["", Validators.required],
      y: ["", Validators.required],
    });
  }

  UpdateObject() {
    this.formFields.get("x").value;
    let x = this.formFields.value["x"];
    let y = this.formFields.value["y"];
    this.irisService.UpdateObject(x, y);
  }
}
