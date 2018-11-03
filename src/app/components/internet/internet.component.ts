import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";
import {Wifi} from "../../models/wifi.model";

@Component({
  selector: 'app-internet',
  templateUrl: './internet.component.html',
  styleUrls: ['./internet.component.css']
})
export class InternetComponent {

  public checkInternetResponse: any;
  public wifi: Wifi = new Wifi();
  public honeypiWifi: Wifi = new Wifi();

  constructor(private appService: AppService) { }

  checkInternet(): void {
    this.appService.checkInternet()
      .subscribe(res => {
        if(res) {
          this.checkInternetResponse = <any>res;
        }
      }, (err: any) => {console.log(err.status); console.log(err);});
  }

}
