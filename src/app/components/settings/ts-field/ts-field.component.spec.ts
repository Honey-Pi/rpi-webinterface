import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsFieldComponent } from './ts-field.component';

describe('TsFieldComponent', () => {
  let component: TsFieldComponent;
  let fixture: ComponentFixture<TsFieldComponent>;

  beforeEach(async(() => {
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
