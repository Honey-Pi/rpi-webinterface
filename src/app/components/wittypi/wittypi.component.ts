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
        name: 'Anschalten alle 30Minuten',
        script:'BEGIN 2015-08-01 08:00:00\n' +
          'END   2025-07-31 18:00:00\n' +
          'ON    M5\n' +
          'OFF   M25'
      },{
        name: 'Anschalten alle 15min',
        script:'BEGIN 2015-08-01 00:00:00 \n' +
          'END   2025-07-31 23:59:59 \n' +
          'ON   M5\n' +
          'OFF   M10'
      },
      {
        name: '7-19Uhr alle 30min, 19-7h stündliches Anschalten',
        script:
          'BEGIN 2015-08-01 07:00:00\n' +
          'END   2025-07-31 23:59:59\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M25\n' +
          'ON    M5\n' +
          'OFF   M55\n' +
          'ON    M5\n' +
          'OFF   M55\n' +
          'ON    M5\n' +
          'OFF   M55\n' +
          'ON    M5\n' +
          'OFF   M55\n' +
          'ON    M5\n' +
          'OFF   M55\n' +
          'ON    M5\n' +
          'OFF   M55\n' +
          'ON    M5\n' +
          'OFF   M55\n' +
          'ON    M5\n' +
          'OFF   M55\n' +
          'ON    M5\n' +
          'OFF   M55\n' +
          'ON    M5\n' +
          'OFF   M55\n' +
          'ON    M5\n' +
          'OFF   M55\n' +
          'ON    M5\n' +
          'OFF   M55\n'
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
