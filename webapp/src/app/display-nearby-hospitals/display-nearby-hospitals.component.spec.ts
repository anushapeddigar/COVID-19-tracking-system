import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNearbyHospitalsComponent } from './display-nearby-hospitals.component';

describe('DisplayNearbyHospitalsComponent', () => {
  let component: DisplayNearbyHospitalsComponent;
  let fixture: ComponentFixture<DisplayNearbyHospitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayNearbyHospitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNearbyHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
