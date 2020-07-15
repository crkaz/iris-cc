import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTimeActivityPlotComponent } from './patient-time-activity-plot.component';

describe('PatientTimeActivityPlotComponent', () => {
  let component: PatientTimeActivityPlotComponent;
  let fixture: ComponentFixture<PatientTimeActivityPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTimeActivityPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTimeActivityPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
