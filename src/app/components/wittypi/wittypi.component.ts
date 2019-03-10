import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Settings} from "../../models/settings.model";

@Component({
  selector: 'app-wittypi',
  templateUrl: './wittypi.component.html',
  styleUrls: ['./wittypi.component.css']
})
export class WittypiComponent implements OnInit {

  public script: string = '';

  public exampleScripts: {name, script}[] =
    [
      {
        name: 'Alle 15 Minuten',
        script:'BEGIN 2015-08-01 00:00:00 \n' +
          'END 2025-07-31 23:59:59 \n' +
          'ON H1 \n' +
          'OFF D1 H23'
      },
      {
        name: 'Tagsüber alle 30 Minuten, Nachts stündlich',
        script:'BEGIN 2015-08-01 00:00:00 \n' +
          'END 2025-07-31 23:59:59 \n' +
          'ON H1 \n' +
          'OFF D1 H23'
      },
      {
        name: 'Sommer und Winters unterschiedlich',
        script:'BEGIN 2015-08-01 00:00:00 \n' +
          'END 2025-07-31 23:59:59 \n' +
          'ON H1 \n' +
          'OFF D1 H23'
      }
    ];

  public selectedExample: string = null;

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

  ngOnInit() {
  }

  saveWittypi(): void {

  }

}
