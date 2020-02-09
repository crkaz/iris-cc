import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTilesPanelComponent } from './dash-tiles-panel.component';

describe('DashTilesPanelComponent', () => {
  let component: DashTilesPanelComponent;
  let fixture: ComponentFixture<DashTilesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashTilesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashTilesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
