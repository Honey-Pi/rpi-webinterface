import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppService} from '../../services/app.service';
import {InternetSettings} from '../../models/internet-settings.model';

import 'rxjs/add/operator/timeout';

@Component({
  selector: 'app-internet',
  templateUrl: './internet.component.html',
  styleUrls: ['./internet.component.css']
})
export class InternetComponent implements OnInit {

  public checkInternetResponse: {connected: boolean, content: string};
  public checkSurfstickResponse: string;
  public isLoading = false;
  public isLoadingAP = false;
  public disallowedChars = '[^/]+';

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
    this.isLoading = true;
    this.checkInternetResponse = null;
    this.appService.checkInternet().timeout(15000)
      .finally(() => this.isLoading = false)
      .subscribe(res => {
        this.checkInternetResponse = <any>res;
      }, (err: any) => {
        console.log(err);
        if (err.name && err.name === 'TimeoutError') {
          this.checkInternetResponse = {connected: false, content: 'Timeout after 15 Seconds.'};
        } else if (err.name && err.name === 'HttpErrorResponse') {
          this.checkInternetResponse = {connected: false, content: null};
        } else {
          this.checkInternetResponse = {connected: false, content: err};
        }
      });
  }

  checkDiag(): void {
    this.isLoadingAP = true;
    this.checkSurfstickResponse = null;
    this.appService.checkDiag().timeout(15000)
      .finally(() => this.isLoadingAP = false)
      .subscribe(res => {
        this.checkSurfstickResponse = <string>res;
      }, (err: any) => {
        console.error(err);
        this.checkSurfstickResponse = JSON.stringify(err);
      });
  }

  copyMessage(text){
    navigator.clipboard.writeText(text).then().catch(e => console.error(e));
  }

}
