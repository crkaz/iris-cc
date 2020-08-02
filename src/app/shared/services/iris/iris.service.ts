import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError, interval, Subject, observable } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { IPatientInfo } from "../../models/IPatientInfo";
import { IPatient } from "../../models/IPatient";
import { ICalendarEntry } from "../../models/ICalendarEntry";
import { IActivityLog } from "../../models/IActivityLog";
import { IMessage } from "../../models/IMessage";
import { ICarer } from "../../models/ICarer";

const BASE_URL = "http://localhost:54268/api/";
const CARER_API_KEY = "testcarer";
const HEADERS = new HttpHeaders({ ApiKey: CARER_API_KEY });

export interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class IrisService {
  constructor(private http: HttpClient) {}

  public GetPatients() {
    const endpoint: string = BASE_URL + "carer/patients/";
    const options = {
      headers: HEADERS,
    };

    return this.http.get<IPatient[]>(endpoint, options);
  }

  public GetPatientInfo(patientId: string) {
    const endpoint: string = BASE_URL + "patientinfo/get/";
    const options = {
      headers: HEADERS,
      params: new HttpParams().set("id", patientId),
    };

    return this.http.get<IPatientInfo>(endpoint, options);
  }

  public GetPatientCalendar(patientId: string, pageN: string, nItems: string) {
    const endpoint: string = BASE_URL + "calendar/carerget/";
    const options = {
      headers: HEADERS,
      params: new HttpParams()
        .set("id", patientId)
        .set("page", pageN)
        .set("nitems", nItems),
    };

    return this.http.get<ICalendarEntry[]>(endpoint, options);
  }

  public GetPatientActivityLogs(
    patientId: string,
    pageN: string,
    nItems: string
  ) {
    const endpoint: string = BASE_URL + "patient/logs/";
    const options = {
      headers: HEADERS,
      params: new HttpParams()
        .set("id", patientId)
        .set("page", pageN)
        .set("nitems", nItems),
    };

    return this.http.get<IActivityLog[]>(endpoint, options);
  }

  public PostPatientMessage(patientId: string, body: IMessage) {
    const endpoint: string = BASE_URL + "message/post/";
    const options = {
      headers: new HttpHeaders({
        ApiKey: CARER_API_KEY,
        "Content-Type": "application/json",
      }),
      params: new HttpParams().set("id", patientId),
      responseType: "text" as "json",
    };

    return this.http.post<IMessage>(endpoint, body, options);
  }

  public PutPatientNotes(patientId: string, body: any) {
    const endpoint: string = BASE_URL + "patientinfo/put/";
    const options = {
      headers: new HttpHeaders({
        ApiKey: CARER_API_KEY,
        "Content-Type": "application/json",
      }),
      params: new HttpParams().set("id", patientId),
      responseType: "text" as "json",
    };

    return this.http.put(endpoint, body, options);
  }

  public DeletePatient(patientId: string) {
    const endpoint: string = BASE_URL + "patient/delete/";
    const options = {
      headers: HEADERS,
      params: new HttpParams().set("id", patientId),
      responseType: "text" as "json",
    };

    return this.http.delete(endpoint, options);
  }

  public GetCarers() {
    const endpoint: string = BASE_URL + "carer/get/";
    const options = { headers: HEADERS };

    return this.http.get<any[]>(endpoint, options);
  }

  public AllocatePatient(body: any) {
    const endpoint: string = BASE_URL + "carer/allocate/";
    const options = {
      headers: new HttpHeaders({
        ApiKey: CARER_API_KEY,
        "Content-Type": "application/json",
      }),
      responseType: "text" as "json",
    };

    return this.http.put(endpoint, body, options);
  }

  public PostCalendarEntry(patientId: string, body: ICalendarEntry) {
    const endpoint: string = BASE_URL + "calendar/post/";
    const options = {
      headers: new HttpHeaders({
        ApiKey: CARER_API_KEY,
        "Content-Type": "application/json",
      }),
      params: new HttpParams().set("id", patientId),
      responseType: "text" as "json",
    };

    return this.http.post<ICalendarEntry>(endpoint, body, options);
  }

  public DeleteCalendarEntry(entryId: string) {
    const endpoint: string = BASE_URL + "calendar/delete/";
    const options = {
      headers: HEADERS,
      params: new HttpParams().set("id", entryId),
      responseType: "text" as "json",
    };

    return this.http.delete(endpoint, options);
  }

  public PutCalendarEntry(entryId: string, body: ICalendarEntry) {
    const endpoint: string = BASE_URL + "calendar/put/";
    const options = {
      headers: new HttpHeaders({
        ApiKey: CARER_API_KEY,
        "Content-Type": "application/json",
      }),
      params: new HttpParams().set("id", entryId),
      responseType: "text" as "json",
    };

    return this.http.put(endpoint, body, options);
  }
}
