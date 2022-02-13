import {Component, HostListener, OnInit} from '@angular/core';
import { AppService } from '../../services/app.service';
import {TranslateService} from '@ngx-translate/core';

import {Channel, Settings} from '../../models/settings.model';
import 'rxjs/add/operator/timeout';
import {InternetSettings} from '../../models/internet-settings.model';
import {DisplaySettings} from '../../models/display-settings.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private appService: AppService, private translate: TranslateService) {}

  get isAccessPoint() {
    const host: string = window.location.hostname;
    return (host === '192.168.4.1');
  }

  public settings: Settings = new Settings();
  public settingsBackup: Settings;
  public settingsSaved = false;
  public settingsError = false;
  public isConnected = true;
  public isLoading = false;

  public enableWittyPi = true;

  // Only set this flag to "false" if you are testing in development (hides the modal for "missing connection").
  public modalEnabled = true;

  private n: any;

  private processSettings(settings: Settings) {
    this.settings = SettingsComponent.validateSettings(<Settings>settings);
    this.saveSettingsBackup(this.settings);
  }

  static validateSettings(settings: Settings): Settings {
    if (!settings.ts_channels) {
      settings.ts_channels = [];
      settings.ts_channels.push(new Channel());
    }
    if (!settings.internet) {
      settings.internet = new InternetSettings();
    }
    if (!settings.sensors) {
      settings.sensors = [];
    }
    if (!settings.display) {
      settings.display = new DisplaySettings();
    }
    return settings;
  }

  private static deepCopy<T>(obj: T): T {
    return <T>JSON.parse(JSON.stringify(obj));
  }

  private saveSettingsBackup(settings: Settings) {
    this.settingsBackup = SettingsComponent.deepCopy<Settings>(settings);
    console.log("The following settings have been stored as backup:", this.settingsBackup);
  }

  public get isSettingsChanged(): boolean {
    return (JSON.stringify(this.settings) !== JSON.stringify(this.settingsBackup));
  }

  public undoChanges() {
    this.settings = SettingsComponent.deepCopy<Settings>(this.settingsBackup);
  }

  /**
   * Determine the mobile operating system.
   * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
   */
  public getMobileOperatingSystem(): string {
    const userAgent = navigator.userAgent || navigator.vendor || window['opera'];

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return 'Windows Phone';
    }

    if (/android/i.test(userAgent)) {
      return 'Android';
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window['MSStream']) {
      return 'iOS';
    }

    return 'unknown';
  }

  public innerWidth: any;

  ngOnInit() {
    /* initial load */
    this.getSettings();
    this.innerWidth = window.innerWidth;
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
    this.isLoading = true;
    this.appService.getSettings().timeout(3000)
      .finally(() => this.isLoading = false)
      .subscribe(res => {
        if (res) {
          this.processSettings(res);
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
        console.log("The following settings have been saved:", res);
        if (res) {
          this.processSettings(res);
        }
        this.settingsSaved = true;
        this.settingsError = false;
        this.hideAlertsTimer();

        if (!this.isAccessPoint) {
          this.translate.get('settings.confirm.savedAP').subscribe((res: string) => {
            if (window.confirm(res)) {
              this.boot('reboot');
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
        this.boot('reboot');
      }
    });
  }
  askForShutdown(): void {
    this.translate.get('settings.confirm.shutdown').subscribe((res: string) => {
      if (window.confirm(res)) {
        this.boot('shutdown');
      }
    });
  }
  boot(mode = 'reboot'): void {
    this.isConnected = false;
    this.appService.boot(mode).timeout(3000).subscribe(
      result => {
        // Handle result
        console.log(result);
      },
      err => {
        console.error(err, err.name);
        if (err.name && (err.name === 'TimeoutError' || err.name === 'HttpErrorResponse')) {
          console.log('Boot: Connection timeout.');
          this.isConnected = false;
        }
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
        window.location.reload();
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}
