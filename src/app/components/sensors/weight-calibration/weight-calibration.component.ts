import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Sensor} from '../../../models/sensor.model';
import {AppService} from '../../../services/app.service';

@Component({
  selector: 'sensors-weight-calibration',
  templateUrl: './weight-calibration.component.html',
  styleUrls: ['./weight-calibration.component.css']
})
export class WeightCalibrationComponent implements OnInit {

  isLoading = false;
  step = 0;
  calibration_weight = 5000;
  weight1 = 0;
  weight2 = 0;
  offset = 0;
  reference_unit = 1;

  @Input()
  sensor: Sensor;

  @Output()
  calibrationChange: EventEmitter<{offset: number; reference_unit: number}> = new EventEmitter<{offset: number; reference_unit: number}>();
  @Output()
  closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  round(number: number, precision: number) {
    const factor = Math.pow(10, precision);
    const tempNumber = number * factor;
    const roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  }

  step_back() {
    this.step--;
    if (this.step <= 0 ) {
      this.step = 0;
    }
  }

  next_step() {
    if (this.step <= 0) {
      this.step++;
    } else if (this.step === 1) {
      this.measure_weight();
    } else if (this.step === 2) {
      this.measure_weight();
    } else if (this.step >= 3) {
      this.finish_calibration();
      this.step++;
    }
    if (this.step > 3 ) {
      this.step = 0;
    }
  }

  measure_weight() {
    this.isLoading = true;

    this.appService.getWeight(this.sensor).timeout(120000)
      .finally(() => {
        this.isLoading = false;
        this.step++;
      })
      .subscribe(res => {
        const weight = res ? <number>res * 1000 : 0;
        if (this.step === 1) {

          this.weight1 = weight;
          this.offset = this.weight1;

        } else if (this.step === 2) {

          this.weight2 = weight;
          this.reference_unit = this.round((this.weight2 - this.offset) / this.calibration_weight, 4);
          if (!this.reference_unit) {
            // shoudn't be 0
            this.reference_unit = 1;
          }
        }
        console.log('weight:' + weight + ' calibration_weight:' + this.calibration_weight
          + ' offset:' + this.offset + ' reference_unit:' + this.reference_unit);

      }, (err: any) => {
        console.error(err);
      });

  }

  finish_calibration() {
    this.calibrationChange.emit({'offset': this.offset, 'reference_unit': this.reference_unit});
    this.close_modal();
  }

  close_modal() {
    this.step = 0;
    this.closeModal.emit(false);
  }

}