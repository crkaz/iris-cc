import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestHttpService {

  constructor(private http: HttpClient) { }

  public GetPatients() {
    const endpoint: string = "http://localhost:54268/api/values";
    return this.http.get(endpoint);
  }
}
