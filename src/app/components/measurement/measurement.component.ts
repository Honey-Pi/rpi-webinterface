import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import 'rxjs-compat/add/operator/finally';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

  public measurement: string = null;
  public isLoading: boolean = false;
  public measurementStarted: boolean = false;
  public numbers: number[];

  constructor(private appService: AppService) {
    const maxLength = 8 * 10;
    this.numbers = Array(maxLength).fill(0).map((x, i) => i);
  }

  ngOnInit() {
    this.getMeasurement();
  }

  getMeasurement(): void {
    this.measurement = null;
    this.measurementStarted = false;
    this.isLoading = true;
    this.appService.getMeasurement()
      .finally(() => {
        this.isLoading = false;
        this.measurementStarted = true;
        console.log("getMeasurement", this.measurement);
      }).subscribe(res => {
        if (res) {
          this.measurement = JSON.stringify(<any>res);
        }
      }, (err) => {
        if (err.error.text) {
          this.measurement = <string>err.error.text;
        }
      });
  }

  get isNoData(): boolean {
    return this.measurementStarted === true && this.thingSpeakFields === null;
  }

  get debugInfo(): string {
    if (this.measurement && this.measurement.includes('{')) {
      return this.measurement.split('{')[0];
    }
    return null;
  }

  get thingSpeakFields(): { string, number } [] {
    if (this.measurement && this.measurement.includes('{')) {
      let str = this.measurement.split('{')[1];
      if (str.length <= 2) {
        return null;
      }
      return <{ string, number } []>JSON.parse('{' + str);
    }
    return null;
  }
}
