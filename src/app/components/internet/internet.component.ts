import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppService} from "../../services/app.service";
import {InternetSettings} from "../../models/internet-settings.model";

@Component({
  selector: 'app-internet',
  templateUrl: './internet.component.html',
  styleUrls: ['./internet.component.css']
})
export class InternetComponent implements OnInit {

  public checkInternetResponse: {connected: boolean, content: string};

  /* two-way databinding for settings*/
  _wifi: InternetSettings;
  @Input()
  set wifi(val: InternetSettings) {
    this.wifiChange.emit(val);
    this._wifi = val;
  }
  get wifi() {
    return this._wifi;
  }
  @Output()
  wifiChange: EventEmitter<InternetSettings> = new EventEmitter<InternetSettings>();

  constructor(private appService: AppService) {}

  ngOnInit() {
  }

  checkInternet(): void {
    this.checkInternetResponse = null;
    this.appService.checkInternet()
      .subscribe(res => {
        this.checkInternetResponse = <any>res;
      }, (err: any) => {
        this.checkInternetResponse.connected = false;
        this.checkInternetResponse.content = err;
        console.log(err.status);
        console.log(err);
      });
  }

}
