import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  providers: [RegisterService],
  styleUrls: ['./register-patient.component.scss']
})
export class RegisterPatientComponent implements OnInit {
  model: any = {};
  auth: AuthenticationService;

  loading = false;
  constructor(private router: Router, private registerService: RegisterService, auth: AuthenticationService) {
    this.registerService = registerService;
    this.auth = auth;
  }
  ngOnInit() { }
  /*
    * Functionality to get patient details
    * */
  register() {
    this.loading = true;
    const email = this.auth.getUserDetails().email;
    /* to check unique email */
    let patientsByEmail: Array<Patient>;
    const patients$: Observable<Array<Patient>> = this.registerService.getUserByEmail(email);
    patients$.subscribe(patients => {
      patientsByEmail = patients;
      if (patientsByEmail.length > 0) {
        alert('Waring: You have already registered for checkup.');
        return;
      }
      this.createPatientEntry(email);
    });
  }
  /*
    * Functionality to add new register patient
    * */
  private createPatientEntry(email: string) {
    this.registerService.create(this.model, email)
      .subscribe(
        data => {
          console.log('Register', data);
          // this.alertService.success('Registration successful', true);
          alert('Registration Succesful');
          const url = 'covid-19-pandemic/nearby-hospitals';
          this.router.navigateByUrl(url).then(e => {
            if (e) {
              console.log('Navigation is successful!');
              // alert('You have all the mandatory symptoms..Please provide the below details for registration');
            } else {
              console.log('Navigation has failed!');
            }
          });
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        });
  }
}