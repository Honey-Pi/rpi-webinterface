import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Settings} from "../../models/settings.model";

@Component({
  selector: 'app-thingspeak',
  templateUrl: './thingspeak.component.html',
  styleUrls: ['./thingspeak.component.css']
})
export class ThingspeakComponent {

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

  constructor() { }

}
