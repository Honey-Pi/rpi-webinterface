import { Injectable } from '@angular/core';
import { Settings } from "../models/settings.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const apiUrl = './backend/';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getSettings(): Observable<Response> {
    let timestamp = "&t=" + ((new Date()).getTime());
    return this.http.get(apiUrl + 'settings.php?getSettings' + timestamp)
      .map((response: Response) => {
        if (response) {
          return response;
        }
      });
  }

  setSettings(newSettings: Settings): Observable<Response> {
    return this.http.post(apiUrl + 'settings.php?setSettings', JSON.stringify(newSettings)).map((response: Response) => {
      return response;
    });
  }

  getTemperatureSensors(): Observable<Response> {
    let timestamp = "&t=" + ((new Date()).getTime());
    return this.http.get(apiUrl + 'ds18b20.php?getSettings' + timestamp)
      .map((response: Response) => {
        if (response) {
          return response;
        }
      });
  }

  checkInternet(): Observable<Response> {
    let timestamp = "?t=" + ((new Date()).getTime());
    return this.http.get(apiUrl + 'check_internet.php' + timestamp)
      .map((response: Response) => {
        if (response) {
          return response;
        }
      });
  }

}
