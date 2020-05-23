import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartForHospitalBedsComponent } from './piechart-for-hospital-beds.component';

describe('PiechartForHospitalBedsComponent', () => {
  let component: PiechartForHospitalBedsComponent;
  let fixture: ComponentFixture<PiechartForHospitalBedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiechartForHospitalBedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartForHospitalBedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
