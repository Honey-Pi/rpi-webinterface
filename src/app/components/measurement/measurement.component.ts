import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

  public measurement;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getMeasurement();
  }

  getMeasurement(): void {
    this.appService.getMeasurement()
      .subscribe(res => {
        if(res) {
          this.measurement = <any>res;
        }
      }, (err: any) => {console.log(err.status); console.log(err);});
  }

}
