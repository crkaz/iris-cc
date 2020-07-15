import { Injectable, NgZone } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  constructor(public snackbar: MatSnackBar, private ngZone: NgZone) { }

  // GREEB bg - SUCCESS notification.
  Success(message = "Success!", duration = 2000, button = "x") {
    this.Open(message, duration, button, "success-toast");
  }

  // RED bg - ERROR notification.
  Error(message = "Error!", duration = 2000, button = "x") {
    this.Open(message, duration, button, "error-toast");
  }

  // BLACK bg - NEUTRAL notification.
  Open(message, duration, button, type) {
    this.ngZone.run(() => {
      this.snackbar.open(message, button, {
        duration: duration,
        panelClass: [type],
        horizontalPosition: "center",
        verticalPosition: "top"
      });
    });
  }
}
