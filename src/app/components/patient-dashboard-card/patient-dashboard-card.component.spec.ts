import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDashboardCardComponent } from './patient-dashboard-card.component';

describe('PatientDashboardCardComponent', () => {
  let component: PatientDashboardCardComponent;
  let fixture: ComponentFixture<PatientDashboardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDashboardCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDashboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
