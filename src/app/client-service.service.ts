import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  url = 'http://localhost:8080';
  percentDone: number;
  uploadSuccess: boolean;

  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get(`${this.url}/vehicle/list`, {responseType: 'json'});
  }

}
