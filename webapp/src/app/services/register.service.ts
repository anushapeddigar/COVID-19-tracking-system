import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Patient } from '../models/patient';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable()
export class RegisterService {
    patientResource: string;
    patientResourceURL: string;
    patientResourceURLWithID: string;

    constructor(private http: HttpClient) {
      this.patientResource = 'patients';
      this.patientResourceURL = `${environment.serverBaseURL}/${this.patientResource}`;
      this.patientResourceURLWithID = this.patientResourceURL;
    }

    /**
     * Returns all patients.
     *
     * @return Observable<Array<Patient>> {Observable array of patients}
     */
    getAll() {
      return this.http.get < Patient[] > (this.patientResourceURL);
    }

    /**
     * Get a patient item.
     *
     * @param  id - string: patientId {patient id}
     * @return Patient {return a patient}
     */
    getById(id: string) {
      return this.http.get(this.patientResourceURL + id);
    }

    /**
     * Creates new patient information.
     *
     * @param  Patient - patient: Patient {new patient object}
     * @return Observable<Patient> {Observable for saved patient object}
     */
    create(patient: Patient, email: string) {
      patient.email = email;
      patient.associatedBed = '0';
      return this.http.post(this.patientResourceURL, patient)
        .pipe(map((response: Response) => {
          return response;
        }));
    }


     /* update(patient: Patient) {
        return this.http.put(this.patientResourceURL + patient.id, patient);
      }*/

    /**
     * Delete a patient item.
     *
     * @param  id- string: patientId {patient id}
     */
    delete(id: string) {
      return this.http.delete(this.patientResourceURL + id);
    }

    // Using an observabales to make http request and fetch data
    getUsers(): Observable < Patient[] > {
      return this.http.get < Patient[] > (this.patientResourceURL);
    }

  /*
   * Update patient information.
   * @param  Patient- patient: Patient {updated patient object}
   * @return Observable<Patient> {Observable for saved patient object}
   */
  updateUser(patient: Patient): Observable < Patient > {
    return this.http
      .put < Patient > (this.patientResourceURL + `/${patient.id}`, patient);
  }

  /**
   * Get a patient item by given parameters.
   *
   * @param  firstName - string: patient first name
   *  @param  lastName - string: patient last name
   * @return Array<Patient> - {return a patient array}
   */
    getPatientByName(fName: string, lName: string): Observable < Patient[] > {
        // Initialize Params Object
        let param = new HttpParams();
        // Begin assigning parameters
        param = param.append('firstName', fName);
        param = param.append('lastName', lName);
        param = param.append('associatedBed', '0');
        // Make the API call using the new parameters.
        return this.http.get<Array<Patient>>(this.patientResourceURL, { params: param });
    }

  /**
   * Get a patient item by given parameters.
   *
   * @param  email - string: patient email
   * @return Array<Patient> - {return a patient array}
   */
  getUserByEmail(email: string): Observable < Patient[] > {
    // Initialize Params Object
    let param = new HttpParams();
    // Begin assigning parameters
    param = param.append('email', email);
    // Make the API call using the new parameters.
    return this.http.get<Array<Patient>>(this.patientResourceURL, { params: param });
  }
}