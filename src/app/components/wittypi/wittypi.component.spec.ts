import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WittypiComponent } from './wittypi.component';

describe('WittypiComponent', () => {
  let component: WittypiComponent;
  let fixture: ComponentFixture<WittypiComponent>;

  beforeEach(async(() => {
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
