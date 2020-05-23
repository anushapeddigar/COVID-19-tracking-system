import { Component, OnInit } from '@angular/core';
import {Bed} from "../models/bed";
import {BedService} from "../services/bed.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-hospital-bed-management',
  templateUrl: './hospital-bed-management.component.html',
  styleUrls: ['./hospital-bed-management.component.scss']
})
export class HospitalBedManagementComponent implements OnInit {

  bedsParent: Array<Bed>;

    /*
   *  get information about all Hospitals.
   * */
  constructor(bedService: BedService) {
    const beds$: Observable<Array<Bed>> = bedService.getBeds();
    beds$.subscribe(beds => {
      this.bedsParent = beds;
    });
  }

  ngOnInit(): void {
  }
}
