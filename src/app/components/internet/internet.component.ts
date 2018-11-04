import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";
import {Wifi} from "../../models/wifi.model";

@Component({
  selector: 'app-internet',
  templateUrl: './internet.component.html',
  styleUrls: ['./internet.component.css']
})
export class InternetComponent {

  public checkInternetResponse: {'connected': boolean, 'content': string};
  public wifi: Wifi = new Wifi();
  public honeypiWifi: Wifi = new Wifi();

  constructor(private appService: AppService) { }

  checkInternet(): void {
    this.checkInternetResponse = null;
    this.appService.checkInternet()
      .subscribe(res => {
        if(res) {
          this.checkInternetResponse = <any>res;
        }
      }, (err: any) => {console.log(err.status); console.log(err);});
  }

}
