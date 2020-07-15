import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/authentication/authentication.service';
import { ToastService } from '../../shared/services/toast/toast.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
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

    this.authService.LogIn(username, password);
  }
}
