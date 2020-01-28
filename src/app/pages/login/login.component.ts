import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/authentication/authentication.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formFields: FormGroup;

  constructor(
    public authService: AuthenticationService,
    public toastService: ToastService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.InitForm();
  }

  InitForm() {
    this.formFields = this.formBuilder.group({
      fUsername: ["", [Validators.required, Validators.email]],
      fPassword: ["", Validators.required]
    });
  }

  LogIn() {
    const username = this.formFields.get("fUsername").value;
    const password = this.formFields.get("fPassword").value;

    this.authService
      .LogIn(username, password)
      .then(_ => {
        this.toastService.Success("Welcome.");
      })
      .catch(err => {
        this.toastService.Error("Invalid email or password.");
        console.log("error: " + err);
      });
  }
}
