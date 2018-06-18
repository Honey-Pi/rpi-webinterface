import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Settings } from "../../models/settings.model";
import { Sensor } from '../../models/sensor.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public settings: Settings = new Settings();
  public temperatureSensors: Array<any> = new Array<any>();
  constructor(private appService: AppService) { }

  ngOnInit() {
    /* initial load */
    this.getSettings();
    this.getTemperatureSensors();
  }

  getSettings(): void {
    this.appService.getSettings()
      .subscribe(res => {
        if(res) {
          this.settings = <any>res;
        }
      }, (err: any) => {console.log(err.status); console.log(err);});
  }

  saveSettings(): void  {
    this.appService.setSettings(this.settings).subscribe(res => {
      console.log(res);
      // load new Settings
      this.getSettings();
    }, (err: any) => {console.log(err.status); console.log(err);});
  }

  /* Sensors */

  addSensor(): void {
    this.settings.sensors.push(new Sensor());
  }

  removeSensor(index: number): void {
    this.settings.sensors.splice(index,1);
  }

  getTemperatureSensors(): void {
    this.appService.getTemperatureSensors()
      .subscribe(res => {
        if(res) {
          this.temperatureSensors = <any>res;
        }
      }, (err: any) => {console.log(err.status); console.log(err);});
  }

}
