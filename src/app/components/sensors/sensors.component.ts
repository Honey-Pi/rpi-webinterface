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

  public temperatureSensors: Array<string> = [];
  public temperatureSensorWasFiltered = false;

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

  /* Temperature Sensors */
  filterTemperatureSensors(devices:Array<string>): Array<string> {
    // 00-40000000000 und
    // 00-c0000000000
    const filteredDevices = devices.filter(function(value: string, index, arr){
      return (value.indexOf('0000000000') !== -1);
    });
    this.temperatureSensorWasFiltered = devices.length !== filteredDevices.length;
    return filteredDevices;
  }

  getTemperatureSensors(): void {
    this.appService.getTemperatureSensors()
      .subscribe(res => {
        if (res) {
          this.temperatureSensors = this.filterTemperatureSensors(<any>res);
        }
      }, (err: any) => {console.log(err.status); console.log(err);});
  }

}
