import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  url = 'http://localhost:4201';
  percentDone: number;
  uploadSuccess: boolean;

  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get(`${this.url}`, {responseType: 'text'});
  }

}
