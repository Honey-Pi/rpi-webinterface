import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Settings } from "../../models/settings.model";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public settings: Settings = new Settings();
  public settingsSaved: boolean = false;
  public settingsError: boolean = false;

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

  getSettings(): void {
    this.appService.getSettings()
      .subscribe(res => {
        if(res) {
          this.settings = <Settings>res;
        }
      }, (err: any) => {console.log(err.status); console.log(err);});
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
    if (confirm("Alle bisher ungespeicherten Änderungen gehen verloren. Die Verbindung wird sich vorrübergehend trennen. \n Das Gerät wird nun neugestartet. Sicher?")) {
      this.appService.reboot();
    }
  }

}
