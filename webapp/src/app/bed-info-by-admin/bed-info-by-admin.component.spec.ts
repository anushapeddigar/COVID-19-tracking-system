import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedInfoByAdminComponent } from './bed-info-by-admin.component';

describe('BedInfoByAdminComponent', () => {
  let component: BedInfoByAdminComponent;
  let fixture: ComponentFixture<BedInfoByAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedInfoByAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedInfoByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
