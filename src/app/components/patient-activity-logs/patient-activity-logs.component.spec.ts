import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientActivityLogsComponent } from './patient-activity-logs.component';

describe('PatientActivityLogsComponent', () => {
  let component: PatientActivityLogsComponent;
  let fixture: ComponentFixture<PatientActivityLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientActivityLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientActivityLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
