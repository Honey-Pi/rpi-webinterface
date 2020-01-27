import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Settings} from "../../models/settings.model";
import {AppService} from "../../services/app.service";
import {FormControl} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";

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

  constructor(private appService: AppService, private translate: TranslateService) { }

  addChannel() {
    this.settings.ts_channels.push({ts_channel_id: undefined, ts_write_key: ''});
  }

  removeChannel(index: number): void {
    this.settings.ts_channels.splice(index, 1);
  }

  get isAddingDisabled(): boolean {
    return (this.settings.ts_channels.length >= 10);
  }

  get isRemovingDisabled(): boolean {
    return (this.settings.ts_channels.length <= 1);
  }

  checkThingSpeakChannel(ts_channel_id: number, ts_write_key: string, el: HTMLButtonElement): void {
    this.translate.get('settings.thingspeak.confirmCheck').subscribe((translated: string) => {
      if (window.confirm(translated)) {
        el.setAttribute('disabled', 'disabled');
        const thingspeakdata = {ts_channel_id: ts_channel_id, ts_write_key: ts_write_key};
        this.appService.checkThingSpeakChannel(thingspeakdata).timeout(15000)
          .finally(() => {
            el.removeAttribute('disabled');
          })
          .subscribe(res => {
            // ok
            el.classList.remove('btn-danger', 'btn-warning');
            el.classList.add('btn-success');
          }, (err: any) => {
            // error
            console.log(err);
            el.classList.remove('btn-success', 'btn-warning');
            el.classList.add('btn-danger');
          });
      }
    });

  }

}
