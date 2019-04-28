import { Injectable } from '@angular/core';
import { Settings } from '../models/settings.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getSettings(): Observable<Settings> {
    const timestamp = 't=' + ((new Date()).getTime());
    return this.http.get<Settings>(environment.apiURL + 'settings.php?getSettings&' + timestamp, {responseType: 'json'});
  }

  setSettings(newSettings: Settings): Observable<Settings> {
    return this.http.post(environment.apiURL + 'settings.php?setSettings', JSON.stringify(newSettings)).map((response: Settings) => {
      return response;
    });
  }

  getTemperatureSensors(): Observable<Response> {
    const timestamp = 't=' + ((new Date()).getTime());
    return this.http.get(environment.apiURL + 'ds18b20.php?' + timestamp)
      .map((response: Response) => {
        if (response) {
          return response;
        }
      });
  }

  getLog(): Observable<string> {
    const timestamp = 't=' + ((new Date()).getTime());
    return this.http.get(environment.apiURL + 'log.php?' + timestamp, {responseType: 'text'});
  }

  deleteLog(): Observable<string> {
    const timestamp = 't=' + ((new Date()).getTime());
    return this.http.get(environment.apiURL + 'log.php?delete&' + timestamp, {responseType: 'text'});
  }

  deleteCsv(): Observable<string> {
    const timestamp = 't=' + ((new Date()).getTime());
    return this.http.get(environment.apiURL + 'offlinecsv.php?delete&' + timestamp, {responseType: 'text'});
  }

  update(mode= 'update'): Observable<Object> {
    const timestamp = 't=' + ((new Date()).getTime());
    return this.http.get(environment.apiURL + 'update.php?mode=' + mode + '&' + timestamp, {responseType: 'json'});
  }

  getMeasurement(): Observable<Response> {
    const timestamp = 't=' + ((new Date()).getTime());
    return this.http.get(environment.apiURL + 'measurement.php?' + timestamp)
      .map((response: Response) => {
        if (response) {
          return response;
        }
      });
  }

  checkInternet(): Observable<Response> {
    const timestamp = 't=' + ((new Date()).getTime());
    return this.http.get(environment.apiURL + 'check_internet.php?' + timestamp)
      .map((response: Response) => {
        if (response) {
          return response;
        }
      });
  }

  boot(mode): Observable<Object> {
    const timestamp = 't=' + ((new Date()).getTime());
    return this.http.get(environment.apiURL + 'boot.php?' + mode + '&' + timestamp);
  }

}
