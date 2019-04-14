import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import {TranslateService} from '@ngx-translate/core';

import { Settings } from '../../models/settings.model';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private appService: AppService, private translate: TranslateService) {}

  public get isAccessPoint() {
    const host: string = window.location.hostname;
    return (host === '192.168.4.1');
  }

  public settings: Settings = new Settings();
  public settingsSaved = false;
  public settingsError = false;
  public isConnected = true;

  public enableWittyPi = true;

  private n: any;

  ngOnInit() {
    /* initial load */
    this.getSettings();
  }
  hideAlertsTimer() {
    // wait 4 Seconds and hide
    if (this.n) {
      clearTimeout(this.n);
    }
    this.n = window.setTimeout(() => {
      this.settingsSaved = false;
      this.settingsError = false;
    }, 4000);
  }

  getSettings(): void {
    this.appService.getSettings().timeout(3000)
      .subscribe(res => {
        if (res) {
          this.settings = <Settings>res;
          this.isConnected = true;
        }
      }, (err: any) => {
        console.error(err, err.name);
        if (err.name && (err.name === 'TimeoutError' || err.name === 'HttpErrorResponse')) {
          this.isConnected = false;
        }
      });
  }

  saveSettings(): void  {
    this.appService.setSettings(this.settings).timeout(5000)
      .subscribe(res => {
        console.log(res);
        if (res) {
          this.settings = <Settings>res;
        }
        this.settingsSaved = true;
        this.settingsError = false;
        this.hideAlertsTimer();

        if (!this.isAccessPoint) {
          this.translate.get('settings.confirm.savedAP').subscribe((res: string) => {
            if (window.confirm(res)) {
              this.reboot();
            }
          });
        }
      }, (err: any) => {
        console.error(err);
        if (err.name && (err.name === 'TimeoutError' || err.name === 'HttpErrorResponse')) {
          this.isConnected = false;
        }
        this.settingsError = true;
        this.hideAlertsTimer();
      });
  }

  askForReboot(): void {
    this.translate.get('settings.confirm.reboot').subscribe((res: string) => {
      if (window.confirm(res)) {
        this.reboot();
      }
    });
  }
  reboot(): void {
    this.isConnected = false;
    this.appService.reboot().timeout(3000).subscribe(
      result => {
        // Handle result
        console.log(result);
      },
      error => {
        console.log('Reboot: Connection timeout.');
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
        window.location.reload(true);
      }
    );
  }

}
