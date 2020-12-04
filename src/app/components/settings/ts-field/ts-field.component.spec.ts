import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TsFieldComponent } from './ts-field.component';

describe('TsFieldComponent', () => {
  let component: TsFieldComponent;
  let fixture: ComponentFixture<TsFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
