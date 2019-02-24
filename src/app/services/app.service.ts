import { Injectable } from '@angular/core';
import { Settings } from "../models/settings.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getSettings(): Observable<Settings> {
    let timestamp = "t=" + ((new Date()).getTime());
    return this.http.get<Settings>(environment.apiURL + 'settings.php?getSettings&' + timestamp, {responseType: 'json'});
  }

  setSettings(newSettings: Settings): Observable<Settings> {
    return this.http.post(environment.apiURL + 'settings.php?setSettings', JSON.stringify(newSettings)).map((response: Settings) => {
      return response;
    });
  }

  getTemperatureSensors(): Observable<Response> {
    let timestamp = "t=" + ((new Date()).getTime());
    return this.http.get(environment.apiURL + 'ds18b20.php?getSettings&' + timestamp)
      .map((response: Response) => {
        if (response) {
          return response;
        }
      });
  }

  getLog(): Observable<string> {
    let timestamp = "t=" + ((new Date()).getTime());
    return this.http.get(environment.apiURL + 'log.php?' + timestamp, {responseType: 'text'});
  }

  deleteLog(): Observable<string> {
    let timestamp = "t=" + ((new Date()).getTime());
    return this.http.get(environment.apiURL + 'log.php?delete&' + timestamp, {responseType: 'text'});
  }

  getMeasurement(): Observable<Response> {
    let timestamp = "t=" + ((new Date()).getTime());
    return this.http.get(environment.apiURL + 'measurement.php?' + timestamp)
      .map((response: Response) => {
        if (response) {
          return response;
        }
      });
  }

  checkInternet(): Observable<Response> {
    let timestamp = "t=" + ((new Date()).getTime());
    return this.http.get(environment.apiURL + 'check_internet.php?' + timestamp)
      .map((response: Response) => {
        if (response) {
          return response;
        }
      });
  }

  reboot(): Observable<Object> {
    let timestamp = "t=" + ((new Date()).getTime());
    return this.http.get(environment.apiURL + 'reboot.php?' + timestamp);
  }

}
