import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Settings } from "../../models/settings.model";

import 'rxjs/add/operator/timeout';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public settings: Settings = new Settings();
  public settingsSaved: boolean = false;
  public settingsError: boolean = false;
  public isConnected: boolean = true;

  constructor(private appService: AppService) {}

  ngOnInit() {
    /* initial load */
    this.getSettings();
  }

  private n: any;
  hideAlertsTimer() {
    //wait 4 Seconds and hide
    if (this.n) {
      clearTimeout(this.n);
    }
    this.n = window.setTimeout(() => {
      this.settingsSaved = false;
      this.settingsError = false;
    }, 4000);
  }

  public get isAccessPoint() {
    let host = window.location.hostname;
    return (host === '192.169.4.1');
  }

  getSettings(): void {
    this.appService.getSettings().timeout(3000)
      .subscribe(res => {
        if(res) {
          this.settings = <Settings>res;
          this.isConnected = true;
        }
      }, (err: any) => {
        console.log(err);
        if(err.name && err.name === 'TimeoutError') {
          this.isConnected = false;
        }
      });
  }

  saveSettings(): void  {
    this.appService.setSettings(this.settings).subscribe(res => {
      console.log(res);
      if(res) {
        this.settings = <Settings>res;
      }
      this.settingsSaved = true;
      this.settingsError = false;
      this.hideAlertsTimer();
    }, (err: any) => {
      console.log(err.status);
      console.log(err);
      this.settingsError = true;
      this.hideAlertsTimer();
    });
  }

  reboot(): void {
    if (window.confirm("Alle ungespeicherten Änderungen gehen verloren. Die Verbindung wird sich vorübergehend trennen. \nDas Gerät wird nun neugestartet. Sicher?")) {
      this.isConnected = false;
      this.appService.reboot().timeout(3000).subscribe(
        result => {
          // Handle result
          console.log(result);
        },
        error => {
          console.log("Reboot: Connection timeout.");
        },
        () => {
          // 'onCompleted' callback.
          // No errors, route to new page here
          window.location.reload(true);
        }
      );
    }
  }

}
