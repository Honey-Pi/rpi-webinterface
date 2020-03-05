import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightCalibrationComponent } from './weight-calibration.component';

describe('WeightCalibrationComponent', () => {
  let component: WeightCalibrationComponent;
  let fixture: ComponentFixture<WeightCalibrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightCalibrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightCalibrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
