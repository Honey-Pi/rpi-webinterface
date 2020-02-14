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

}
