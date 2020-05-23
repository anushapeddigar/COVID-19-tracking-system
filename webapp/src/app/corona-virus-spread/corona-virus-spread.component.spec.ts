import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaVirusSpreadComponent } from './corona-virus-spread.component';

describe('CoronaVirusSpreadComponent', () => {
  let component: CoronaVirusSpreadComponent;
  let fixture: ComponentFixture<CoronaVirusSpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaVirusSpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaVirusSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
