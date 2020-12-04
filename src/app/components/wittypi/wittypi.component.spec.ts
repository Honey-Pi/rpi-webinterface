import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WittypiComponent } from './wittypi.component';

describe('WittypiComponent', () => {
  let component: WittypiComponent;
  let fixture: ComponentFixture<WittypiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WittypiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WittypiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
