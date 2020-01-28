import { Injectable, NgZone } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { IUser } from "../../models/IUser";
import { ToastService } from "../toast/toast.service";

//@TODO: Change to a token.
const COOKIE: string = "IRIS_CC_USER";
const LOGIN_PAGE: string = "login";
const LANDING_PAGE: string = "dashboard";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  userData: any; // Save logged in user data

  // Returns true when user is looged in and email is verified
  get IsLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem(COOKIE));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public toastr: ToastService,
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem(COOKIE, JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem(COOKIE));
      } else {
        localStorage.setItem(COOKIE, null);
        JSON.parse(localStorage.getItem(COOKIE));
      }
    });
  }

  async LogIn(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password).then(result => {
        this.router.navigate([LANDING_PAGE]);
        this.SetUserData(result.user);
      }).catch(err => {
        console.log(err);
      });
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: IUser = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  async LogOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem(COOKIE);
      this.router.navigate([LOGIN_PAGE]);
    }).catch(err => {
      console.log(err);
    });;
  }
}
