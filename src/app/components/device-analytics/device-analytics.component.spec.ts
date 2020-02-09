import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAnalyticsComponent } from './device-analytics.component';

describe('DeviceAnalyticsComponent', () => {
  let component: DeviceAnalyticsComponent;
  let fixture: ComponentFixture<DeviceAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
