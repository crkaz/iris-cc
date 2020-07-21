import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { IPatientInfo } from "../../models/IPatientInfo";
import { IPatient } from "../../models/IPatient";

const BASE_URL = "http://localhost:54268/api/";

const CARER_API_KEY = "testcarer1";

@Injectable({
  providedIn: "root",
})
export class IrisService {
  //#region options: {
  //   headers?: HttpHeaders | {[header: string]: string | string[]},
  //   observe?: 'body' | 'events' | 'response',
  //   params?: HttpParams|{[param: string]: string | string[]},
  //   reportProgress?: boolean,
  //   responseType?: 'arraybuffer'|'blob'|'json'|'text',
  //   withCredentials?: boolean,
  // }
  //#endregion

  constructor(private http: HttpClient) {}

  public GetPatients() {
    const endpoint: string = BASE_URL + "carer/patients/";
    const options = {
      headers: new HttpHeaders({ ApiKey: CARER_API_KEY }),
    };

    const response = this.http.get<IPatient[]>(endpoint, options);
    return response;
  }

  public GetPatientInfo(patientId: string) {
    const endpoint: string = BASE_URL + "patientinfo/get/";
    const options = {
      headers: new HttpHeaders({ ApiKey: CARER_API_KEY }),
      params: new HttpParams().set("id", patientId),
    };

    const response = this.http.get<IPatientInfo>(endpoint, options);
    return response;
  }
}

// public PutPatientInfo(){
//     const endpoint: string = "http://localhost:54268/patientinfo/put";
//     const options = {
//       headers: new HttpHeaders ({ "ApiKey":  "testcarer" }),
//       queryParams: new HttpParams().set("id", "testpatient"),
//       observe: "response" as const
//       // responseType: "text" as const
//     };

//     const response = this.http.get(endpoint, options);
//     console.log(response);
//     return response;
// }

// import { Injectable } from '@angular/core';
// // import { AngularFireDatabase } from "@angular/fire/database";
// // import { AngularFireObject } from "@angular/fire/database";
// // import { IPatient, IInfo } from '../../models/IPatient';

// @Injectable({
//   providedIn: 'root'
// })
// export class IrisService {
//   // private result: AngularFireObject<any>;
//   public patients: any[];
//   // private selectedPatient: IPatient;

//   // constructor(private db: AngularFireDatabase) {
//     // this.selectedPatient = null;
//   // }

//   //#region Getters.

//   // public get SelectedPatient() { return this.selectedPatient; }

//   //#endregion

//   LoadPatient(patientUID: string) {
//     // this.GetObject("/patients/" + patientUID).snapshotChanges()
//     //   .subscribe(data => {
//     //     this.selectedPatient = data.payload.toJSON(); // Get patients.
//     //     this.selectedPatient.uid = patientUID;
//     //   })
//   }

//   GetObject(path: string): any {
//     // this.result = this.db.object(path);
//     // return this.result;
//   }

//   UpdateObject(xnew, ynew): boolean {
//     return false;
//     // this.GetObject("/layout"); // set database ref to protocol

//     // this.result.update({
//     //   x: xnew,
//     //   y: ynew
//     // });

//     // return true;
//   }
//   //**TODO: CHANGE TO UPDATE OBJECT WHEN GETTING RID OF UNITY TEST */
//   UpdateObj(collection: string, updatedObj: object) {
//     // let uid = this.selectedPatient.uid;
//     // this.GetObject("/patients/" + uid + "/" + collection);// + collection + "/"); // set database ref to protocol
//     // this.result.set(updatedObj);

//     // this.result.update({
//     //   value
//     // })
//   }
// }

// // import { Injectable } from "@angular/core";
// // import { AngularFireDatabase } from "@angular/fire/database";
// // import { AngularFireObject } from "@angular/fire/database";

// // @Injectable({
// //   providedIn: "root"
// // })
// // export class CrudService {
// //   private protocol: AngularFireObject<any>;

// //   constructor(private db: AngularFireDatabase) {}

// //   // Fetch protocols from the database
// //   GetProtocolObject(path: string) {
// //     this.protocol = this.db.object(path);
// //     return this.protocol;
// //   }

// //   CreateProtocol(newProtocol: Protocol): boolean {
// //     // firebase.database().ref('/protocols/').set(newProtocol);
// //     var ref = this.db.list("/protocols").push(newProtocol);
// //     ref.update({key: ref.key});

// //     return true;
// //   }

// //   UpdateProtocol(modifiedProtocol: Protocol): boolean {
// //     this.GetProtocolObject("/protocols/" + modifiedProtocol.key); // set database ref to protocol

// //     this.protocol.update({
// //       key: modifiedProtocol.key,
// //       name: modifiedProtocol.name,
// //       dose: modifiedProtocol.dose,
// //       units: modifiedProtocol.units,
// //       concentration: modifiedProtocol.concentration,
// //       injectionTime: modifiedProtocol.injectionTime,
// //       injectionRate: modifiedProtocol.injectionRate,
// //       maxContrastDose: modifiedProtocol.maxContrastDose,
// //       notes: modifiedProtocol.notes
// //     });

// //     return true;
// //   }

// //   DeleteProtocol(key: String): boolean {
// //     console.log("got it in crud");
// //     console.log(key);
// //     this.GetProtocolObject("/protocols/" + key);
// //     this.protocol.remove();
// //     console.log("should be removed from db");
// //     return true;
// //   }
// // }
