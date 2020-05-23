import { Component, OnInit } from '@angular/core';
import {BedService} from '../services/bed.service';
import {Observable} from 'rxjs';
import {Bed} from '../models/bed';
import { Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-display-nearby-hospitals',
  templateUrl: './display-nearby-hospitals.component.html',
  styleUrls: ['./display-nearby-hospitals.component.scss']
})
export class DisplayNearbyHospitalsComponent implements OnInit {

  bedService: BedService;
  selectedCity: string;
  bedsByCity: Array<Bed>;
  router: Router;
  selectedHospital: Bed;
  auth: AuthenticationService;

  constructor(bedService: BedService, router: Router, auth: AuthenticationService) {
    this.bedService = bedService;
    this.router = router;
    this.auth = auth;
  }

  ngOnInit(): void {
  }

  /* Display near by Hospital with Bed information based on selected city */
  displayInformation(city: string) {
    if (city.length > 0) {
      this.selectedCity = city;
      const beds$: Observable<Array<Bed>> = this.bedService.getHospitalBedsByCity(city);
      beds$.subscribe(beds => {
        this.bedsByCity = beds;
      });
    } else {
      this.selectedCity = null;
      this.bedsByCity = null;
    }
  }

  /* Function to Navigate to another component to register bed for patient */
  navigate() {
    if (!this.selectedHospital) {
      alert('Warning: Please select a row.');
      return;
    }
    if (this.selectedHospital.availableBeds <= 0) {
      alert('Warning: Please select a Hospital with more Available bed count');
      return;
    }
    const selectedBedId = this.selectedHospital.id;
    /* ToDo: How to send object from one component to another */
    this.router.navigate(['/bed-allocation'], { queryParams: { bedId: selectedBedId}});
  }

  highlightClickedRow(bed: Bed) {
    this.selectedHospital = bed;
  }
}
