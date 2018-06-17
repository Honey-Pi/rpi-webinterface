import { Injectable } from '@angular/core';
import { Settings } from "../models/settings.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const apiUrl = 'https://www.honey-pi.de/backend/settings.php';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getSettings(): Observable<Response> {
    let timestamp = "&t=" + ((new Date()).getTime());
    return this.http.get(apiUrl + '?getSettings' + timestamp)
      .map((response: Response) => {
        if (response) {
          return response;
        }
      });
  }

  setSettings(newSettings: Settings): Observable<Response> {
    return this.http.post(apiUrl + '?setSettings', JSON.stringify(newSettings)).map((response: Response) => {
      return response;
    });
  }
}
