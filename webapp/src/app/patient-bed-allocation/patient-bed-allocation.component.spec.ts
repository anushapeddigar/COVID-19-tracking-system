import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBedAllocationComponent } from './patient-bed-allocation.component';

describe('PatientBedAllocationComponent', () => {
  let component: PatientBedAllocationComponent;
  let fixture: ComponentFixture<PatientBedAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientBedAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientBedAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
