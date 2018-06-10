import { Injectable } from '@angular/core';
import { Settings } from "../models/settings.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import {RequestOptions} from '@angular/http';

const apiUrl = 'https://honey-pi.de/webinterface-test/settings.php';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getSettings(): Observable<Response> {
    let timestamp = "&t=" + ((new Date()).getTime());
    return this.http.get(apiUrl + '?getSettings' + timestamp)
      .map((response: Response) => {
        switch (response.status) {
          case 200 :
            return response;
          default :
            return response;
        }
      });
  }

  setSettings(newSettings: Settings): Observable<Response> {
    return this.http.post(apiUrl + '?setSettings', JSON.stringify(newSettings)).map((response: Response) => {
      switch (response.status) {
        case 200 :
          return response;
        default :
          return response;
      }
    });
  }
}
