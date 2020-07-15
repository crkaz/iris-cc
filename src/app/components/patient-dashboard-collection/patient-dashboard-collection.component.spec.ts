import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDashboardCollectionComponent } from './patient-dashboard-collection.component';

describe('PatientCollectionComponent', () => {
  let component: PatientDashboardCollectionComponent;
  let fixture: ComponentFixture<PatientDashboardCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDashboardCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDashboardCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
