import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Sensor} from "../../models/sensor.model";
import {AppService} from "../../services/app.service";
import {Settings} from "../../models/settings.model";

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

  public temperatureSensors: Array<any> = [];

  /* two-way databinding for settings*/
  _settings: Settings;
  @Input()
  set settings(val: Settings) {
    this.settingsChange.emit(val);
    this._settings = val;
  }
  get settings() {
    return this._settings;
  }
  @Output()
  settingsChange: EventEmitter<Settings> = new EventEmitter<Settings>();

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getTemperatureSensors();
  }

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
