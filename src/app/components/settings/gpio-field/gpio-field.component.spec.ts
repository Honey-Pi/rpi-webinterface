import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GpioFieldComponent } from './gpio-field.component';

describe('GpioFieldComponent', () => {
  let component: GpioFieldComponent;
  let fixture: ComponentFixture<GpioFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GpioFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpioFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
