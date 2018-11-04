import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingspeakComponent } from './thingspeak.component';

describe('ThingspeakComponent', () => {
  let component: ThingspeakComponent;
  let fixture: ComponentFixture<ThingspeakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingspeakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingspeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
