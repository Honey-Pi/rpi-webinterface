import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Settings} from '../../models/settings.model';
import {environment} from '../../../environments/environment';
import {AppService} from '../../services/app.service';


@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.css']
})
export class OfflineComponent implements OnInit {

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

  public apiURL;

  ngOnInit() {
    this.apiURL = environment.apiURL;
  }

  deleteCsv(channelId): void {
    this.appService.deleteCsv(channelId)
      .subscribe(res => {
      }, (err: any) => {console.error(err); });
  }

  uploadCsv(channelId, writeKey): void {
    this.appService.uploadCsv(channelId, writeKey)
      .subscribe(res => {
        let response = <any>res;
        if(response.success === true) {
          alert("Success!");
        }else {
          alert(JSON.stringify(res, null, 4));
        }
      }, (err: any) => {
        console.error(err);
        let error = err.error.text || err.error.content;
        if(error) {
          alert(JSON.stringify(error, null, 4));
        }
      });
  }

  get isThingSpeakDefined() {
    return (this.settings.ts_channels.filter(x => x.ts_channel_id > 0).length === 0);
  }

}
