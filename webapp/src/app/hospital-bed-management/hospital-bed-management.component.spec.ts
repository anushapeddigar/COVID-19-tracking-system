import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBedManagementComponent } from './hospital-bed-management.component';

describe('HospitalBedManagementComponent', () => {
  let component: HospitalBedManagementComponent;
  let fixture: ComponentFixture<HospitalBedManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalBedManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalBedManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
