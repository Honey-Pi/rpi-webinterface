import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import 'rxjs-compat/add/operator/finally';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

  public measurement: any = null;
  public isLoading: boolean = false;
  public measurementStarted: boolean = false;
  public numbers: number[];

  constructor(private appService: AppService) {
    const maxLength = 8 * 10;
    this.numbers = Array(maxLength).fill(0).map((x, i) => i);
  }

  ngOnInit() {
  //  this.getMeasurement();
  }

  getMeasurement(): void {
    this.measurement = null;
    this.measurementStarted = false;
    this.isLoading = true;
    this.appService.getMeasurement()
      .finally(() => this.isLoading = false)
      .subscribe(res => {
        this.measurementStarted = true;
        console.log(res);
        if (res) {
          this.measurement = <any>res;
        }
      }, (err: any) => {
        console.error(err);
      });
  }

  get debugInfo(): string {
    if (this.measurement && this.measurement.toString().includes('{')) {
      const str = this.measurement.toString().split('{')[0];
      return str;
    }
    return null;
  }

  get thingSpeakFields(): JSON {
    if (this.measurement && this.measurement.toString().includes('{')) {
      let str = this.measurement.toString().split('{');
      if (str.length <= 1) {
        return null;
      }
      str = '{' + str[str.length - 1];
      return JSON.parse(str);
    }
    return null;
  }
}
