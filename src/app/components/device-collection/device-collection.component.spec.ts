import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCollectionComponent } from './device-collection.component';

describe('DeviceCollectionComponent', () => {
  let component: DeviceCollectionComponent;
  let fixture: ComponentFixture<DeviceCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
