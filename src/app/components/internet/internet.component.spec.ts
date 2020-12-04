import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InternetComponent } from './internet.component';

describe('InternetComponent', () => {
  let component: InternetComponent;
  let fixture: ComponentFixture<InternetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
