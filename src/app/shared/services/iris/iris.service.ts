import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError, interval, Subject, observable } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { IPatientInfo } from "../../models/IPatientInfo";
import { IPatient } from "../../models/IPatient";
import { ICalendarEntry } from "../../models/ICalendarEntry";
import { IActivityLog } from "../../models/IActivityLog";
import { IMessage } from "../../models/IMessage";

const BASE_URL = "http://localhost:54268/api/";
const CARER_API_KEY = "testcarer1";

export interface Message {
  author: string;
  message: string;
}

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

  private GetPatientId() {}

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

  public GetPatientCalendar(patientId: string, pageN: string, nItems: string) {
    const endpoint: string = BASE_URL + "calendar/carerget/";
    const options = {
      headers: new HttpHeaders({ ApiKey: CARER_API_KEY }),
      params: new HttpParams()
        .set("id", patientId)
        .set("page", pageN)
        .set("nitems", nItems),
    };

    const response = this.http.get<ICalendarEntry[]>(endpoint, options);
    return response;
  }

  public GetPatientActivityLogs(
    patientId: string,
    pageN: string,
    nItems: string
  ) {
    const endpoint: string = BASE_URL + "patient/logs/";
    const options = {
      headers: new HttpHeaders({ ApiKey: CARER_API_KEY }),
      params: new HttpParams()
        .set("id", patientId)
        .set("page", pageN)
        .set("nitems", nItems),
    };

    const response = this.http.get<IActivityLog[]>(endpoint, options);
    return response;
  }

  public SendPatientMessage(patientId: string, body: IMessage) {
    const endpoint: string = BASE_URL + "message/post/";
    const options = {
      headers: new HttpHeaders({
        ApiKey: CARER_API_KEY,
        "Content-Type": "application/json",
      }),
      params: new HttpParams().set("id", patientId),
      responseType: "text" as "json",
    };

    const response = this.http.post<IMessage>(endpoint, body, options);
    return response;
  }

  public UpdatePatientNotes(patientId: string, body: any) {
    const endpoint: string = BASE_URL + "patientinfo/put/";
    const options = {
      headers: new HttpHeaders({
        ApiKey: CARER_API_KEY,
        "Content-Type": "application/json",
      }),
      params: new HttpParams().set("id", patientId),
      responseType: "text" as "json",
    };

    const response = this.http.put(endpoint, body, options);
    return response;
  }
}
