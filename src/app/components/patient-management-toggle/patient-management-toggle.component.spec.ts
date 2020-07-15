import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientManagementToggleComponent } from './patient-management-toggle.component';

describe('PatientManagementToggleComponent', () => {
  let component: PatientManagementToggleComponent;
  let fixture: ComponentFixture<PatientManagementToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientManagementToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientManagementToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
