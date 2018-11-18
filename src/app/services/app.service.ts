import { Injectable } from '@angular/core';
import { Settings } from "../models/settings.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const apiUrl = 'http://raspberrypi.fritz.box/backend/';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getSettings(): Observable<Settings> {
    let timestamp = "t=" + ((new Date()).getTime());
    return this.http.get<Settings>(apiUrl + 'settings.php?getSettings&' + timestamp, {responseType: 'json'});
  }

  setSettings(newSettings: Settings): Observable<Settings> {
    return this.http.post(apiUrl + 'settings.php?setSettings', JSON.stringify(newSettings)).map((response: Settings) => {
      return response;
    });
  }

  getTemperatureSensors(): Observable<Response> {
    let timestamp = "t=" + ((new Date()).getTime());
    return this.http.get(apiUrl + 'ds18b20.php?getSettings&' + timestamp)
      .map((response: Response) => {
        if (response) {
          return response;
        }
      });
  }

  getLog(): Observable<string> {
    let timestamp = "t=" + ((new Date()).getTime());
    return this.http.get(apiUrl + 'log.php?' + timestamp, {responseType: 'text'});
  }

  deleteLog(): Observable<string> {
    let timestamp = "t=" + ((new Date()).getTime());
    return this.http.get(apiUrl + 'log.php?delete&' + timestamp, {responseType: 'text'});
  }

  getMeasurement(): Observable<Response> {
    let timestamp = "t=" + ((new Date()).getTime());
    return this.http.get(apiUrl + 'measurement.php?' + timestamp)
      .map((response: Response) => {
        if (response) {
          return response;
        }
      });
  }

  checkInternet(): Observable<Response> {
    let timestamp = "t=" + ((new Date()).getTime());
    return this.http.get(apiUrl + 'check_internet.php?' + timestamp)
      .map((response: Response) => {
        if (response) {
          return response;
        }
      });
  }

  reboot(): Observable<Response> {
    let timestamp = "t=" + ((new Date()).getTime());
    return this.http.get(apiUrl + 'reboot.php?' + timestamp)
      .map((response: Response) => {
        if (response) {
          return response;
        }
      });
  }

}
