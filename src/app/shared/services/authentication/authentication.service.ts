import { Injectable, NgZone } from "@angular/core";
// import {
//   AngularFirestore,
//   AngularFirestoreDocument
// } from "@angular/fire/firestore";
// import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
// import { IUser } from "../../models/IUser";
import { ToastService } from "../toast/toast.service";
import { UtilsService } from "../utils/utils.service"
// import { User } from "firebase";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  // userData: User; // Save logged in user data.

  // Returns true when user is looged in and email is verified
  get IsLoggedIn(): boolean {
    return false;
    // const user = JSON.parse(localStorage.getItem(this.utils.USER_COOKIE));
    // return user !== null && user.emailVerified !== false ? true : false;
  }

  constructor(
    private utils: UtilsService,
    // public afs: AngularFirestore, // Inject Firestore service
    // public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public toastService: ToastService,
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    // this.afAuth.authState.subscribe(user => {
      // if (user) {
        // this.userData = user;
        // localStorage.setItem(this.utils.USER_COOKIE, JSON.stringify(this.userData));
        // JSON.parse(localStorage.getItem(this.utils.USER_COOKIE));
      // } else {
        // localStorage.setItem(this.utils.USER_COOKIE, null);
        // JSON.parse(localStorage.getItem(this.utils.USER_COOKIE));
      // }
    // });
  }

  async LogIn(email: string, password: string) {
    // this.afAuth.auth
    //   .signInWithEmailAndPassword(email, password).then(result => {
    //     this.router.navigate([this.utils.LANDING_PAGE]);
    //     this.SetUserData(result.user);
    //     this.toastService.Success("Welcome.");
    //   }).catch(err => {
    //     this.toastService.Error("Invalid email or password.");
    //     console.log(err);
    //   });
  }

  SetUserData(user) {
    // const userRef: AngularFirestoreDocument<any> = this.afs.doc(
    //   `users/${user.uid}`
    // );
    // const userData: IUser = {
    //   uid: user.uid,
    //   email: user.email,
    //   emailVerified: user.emailVerified
    // };
    // return userRef.set(userData, {
    //   merge: true
    // });
  }

  async LogOut() {
  //   return this.afAuth.auth.signOut().then(() => {
  //     localStorage.removeItem(this.utils.USER_COOKIE);
  //     this.router.navigate([this.utils.LOGIN_PAGE]);
  //   }).catch(err => {
  //       this.toastService.Error("Something went wrong...");
  //       console.log(err);
  //   });;
  }
}
