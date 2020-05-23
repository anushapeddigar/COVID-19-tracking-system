import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaVirusPrecautionsComponent } from './corona-virus-precautions.component';

describe('CoronaVirusPrecautionsComponent', () => {
  let component: CoronaVirusPrecautionsComponent;
  let fixture: ComponentFixture<CoronaVirusPrecautionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaVirusPrecautionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaVirusPrecautionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
