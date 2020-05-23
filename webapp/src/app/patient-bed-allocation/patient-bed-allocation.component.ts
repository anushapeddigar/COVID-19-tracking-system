import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Bed} from '../models/bed';
import {BedService} from '../services/bed.service';
import {RegisterService} from '../services/register.service';
import {Patient} from '../models/patient';

@Component({
  selector: 'app-patient-bed-allocation',
  templateUrl: './patient-bed-allocation.component.html',
  styleUrls: ['./patient-bed-allocation.component.scss']
})
export class PatientBedAllocationComponent implements OnInit {

  selectedBed: Bed;
  bedService: BedService;
  registerService: RegisterService;
  patients: Array<Patient>;
  selectedPatient: Patient;
  isBedAllocated: boolean;

  constructor(private route: ActivatedRoute, bedService: BedService, registerService: RegisterService) {
    this.bedService = bedService;
    this.registerService = registerService;
  }

  /* Pass selected hospital information on OnInit */
  ngOnInit(): void {
    let bedId;
    this.route.queryParams.subscribe(params => {
       bedId = params.bedId;
    });
    this.getSelectedHospitalInfo(bedId);
  }

  /* Function to get selected Hospital Info by ID*/
  private getSelectedHospitalInfo(bedId: number) {
    const bedById = this.bedService.getBedInfoById(bedId);
    bedById.subscribe(bed => {
      this.selectedBed = bed;
    });
  }

  /* Function to search for Patient by passing query parameters as firstname
  *   and lastname */
  private searchForPatient(firstName: string, lastName: string) {
    if (!firstName || !lastName) {
      alert('Warning: Please add first name and last name for Patient.');
      return;
    }
    this.patients = null;
    // QueryString: look for patient
    const patient$ = this.registerService.getPatientByName(firstName, lastName);
    patient$.subscribe(patients => {
      this.patients = patients;
    });
  }

  /* Function to highlight selected row in a table*/
  highlightClickedRow(patient: Patient) {
    this.selectedPatient = patient;
  }

  /* Function to allocate a bed for selected patient */
  allocateBedForPatient() {
    if (!this.selectedPatient) {
      alert('Warning: Please select a row.');
      return;
    }
    /* Allocate Bed for Patient */
    this.selectedPatient.associatedBed = this.selectedBed.id.toString();
    this.registerService.updateUser(this.selectedPatient).subscribe();
    /*reduce available bed count by 1 for given hospital */
    this.selectedBed.availableBeds = this.selectedBed.availableBeds - 1;
    this.bedService.updateBedInfo(this.selectedBed).subscribe( bed => {
      this.isBedAllocated = bed ? true : false;
    });
    this.bedService.sendEmailBed(this.selectedPatient.email, this.selectedPatient.firstName, this.selectedBed.hospital).subscribe(success => {
      console.log(success);
    }, error => {
      console.error(error);
    });

  }
}

