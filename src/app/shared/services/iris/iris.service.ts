import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireObject } from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class IrisService {
  private result: AngularFireObject<any>;
  public users: any[];

  constructor(private db: AngularFireDatabase) {
  }

  Talk() {
    // Send data to a target Hololens device.
  }

  Listen() {
    // Read data from a target Hololens device.
  }

  GetObject(path: string) {
    this.result = this.db.object(path);
    return this.result;
  }

  UpdateObject(xnew, ynew): boolean {
    this.GetObject("/layout"); // set database ref to protocol 

    this.result.update({
      x: xnew,
      y: ynew
    });

    return true;
  }
}

// import { Injectable } from "@angular/core";
// import { AngularFireDatabase } from "@angular/fire/database";
// import { AngularFireObject } from "@angular/fire/database";

// @Injectable({
//   providedIn: "root"
// })
// export class CrudService {
//   private protocol: AngularFireObject<any>;

//   constructor(private db: AngularFireDatabase) {}

//   // Fetch protocols from the database
//   GetProtocolObject(path: string) {
//     this.protocol = this.db.object(path);
//     return this.protocol;
//   }

//   CreateProtocol(newProtocol: Protocol): boolean {
//     // firebase.database().ref('/protocols/').set(newProtocol);
//     var ref = this.db.list("/protocols").push(newProtocol);
//     ref.update({key: ref.key});

//     return true;
//   }

//   UpdateProtocol(modifiedProtocol: Protocol): boolean {
//     this.GetProtocolObject("/protocols/" + modifiedProtocol.key); // set database ref to protocol 

//     this.protocol.update({
//       key: modifiedProtocol.key,
//       name: modifiedProtocol.name,
//       dose: modifiedProtocol.dose,
//       units: modifiedProtocol.units,
//       concentration: modifiedProtocol.concentration,
//       injectionTime: modifiedProtocol.injectionTime,
//       injectionRate: modifiedProtocol.injectionRate,
//       maxContrastDose: modifiedProtocol.maxContrastDose,
//       notes: modifiedProtocol.notes
//     });

//     return true;
//   }

//   DeleteProtocol(key: String): boolean {
//     console.log("got it in crud");
//     console.log(key);
//     this.GetProtocolObject("/protocols/" + key);
//     this.protocol.remove();
//     console.log("should be removed from db");
//     return true;
//   }
// }