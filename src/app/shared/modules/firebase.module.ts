import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';

@NgModule({
   imports: [
      CommonModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      // AngularFireAuthModule,
      // AngularFireDatabaseModule,
      // AngularFirestoreModule,
   ],
   exports: [
      // AngularFireAuthModule,
      // AngularFireDatabaseModule,
      // AngularFirestoreModule,
   ],
   providers: [
   ]
})

export class FirebaseModule { }