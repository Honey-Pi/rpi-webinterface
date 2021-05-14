import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Settings} from "../../models/settings.model";
import {AppService} from "../../services/app.service";
import {FormControl} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-thingspeak',
  templateUrl: './thingspeak.component.html',
  styleUrls: ['./thingspeak.component.css']
})
export class ThingspeakComponent implements OnInit {

  public thingspeakUrlPattern = '^(?:(?:(?:[a-zA-z\\-]+)\\:\\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9-\\.]){1,61}[a-zA-Z0-9](?:\\.[a-zA-Z]{2,})+|\\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\\]|(?:(?:[0-9]{1,3})(?:\\.[0-9]{1,3}){3}))(?:\\:[0-9]{1,5})?$';

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

  ngOnInit() {
  }

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

  checkThingSpeakChannel(channelId: number, writeKey: string, el: HTMLButtonElement): void {
    this.translate.get('settings.thingspeak.confirmCheck').subscribe((translated: string) => {
      if (window.confirm(translated)) {
        el.setAttribute('disabled', 'disabled');
        const thingspeakdata = {channelId: channelId, writeKey: writeKey};
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
