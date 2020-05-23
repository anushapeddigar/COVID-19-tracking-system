import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import {Bed} from '../models/bed';

@Injectable()
export class BedService {
  todoResource: string;
  todoResourceURL: string;
  todoResourceURLWithID: string;
  sendEmailUrlbed = `/sendbed`;
  public rootURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.todoResource = 'beds';
    this.todoResourceURL = `${environment.serverBaseURL}/${this.todoResource}`;
    this.todoResourceURLWithID = this.todoResourceURL;
  }

  /**
   * Returns all beds.
   *
   * @return {Observable<Array<Bed>>} {Observable bed array of beds}
   */
  getBeds(): Observable<Array<Bed>> {
    return this.http.get<Array<Bed>>(this.todoResourceURL);
  }

  /**
   * Creates new hospital bed information.
   *
   * @param  {Bed} bed: Bed {new bed object}
   * @return {Observable<Bed>} {Observable for saved bed object}
   */
  addBed(bed: Bed): Observable<Bed> {
    return this.http.post<Bed>(this.todoResourceURL, bed);
  }

  /**
   * Get a bed item.
   *
   * @param  {bedId} number: bedId {bed id}
   * @return {<Bed>} {return a Bed}
   */
  getBedInfoById(bedId: number): Observable<Bed> {
    const url = this.todoResourceURL + `/${bedId}`;
    return this.http.get<Bed>(url);
  }

  /**
   * Delete a bed item.
   *
   * @param  {bedId} number: bedId {bed id}
   */
  removeHospitalInfo(bedId: number) {
    const url = this.todoResourceURL + `/${bedId}`;
    return this.http.delete(url);
  }

  /**
   * Update hospital bed information.
   *
   * @param  {Bed} bed: Bed {updated bed object}
   * @return {Observable<Bed>} {Observable for saved bed object}
   */
  updateBedInfo(bed: Bed): Observable<Bed> {
    const url = this.todoResourceURL + `/${bed.id}`;
    return this.http.put<Bed>(url, bed);
  }

  /**
   * Returns all beds by given City name.
   *
   * @return {Observable<Array<Bed>>} {Observable bed array of beds}
   */
  getHospitalBedsByCity(cityName: string): Observable<Array<Bed>> {
    // Initialize Params Object
    let param = new HttpParams();
    // Begin assigning parameters
    param = param.append('city', cityName);
    // Make the API call using the new parameters.
    return this.http.get<Array<Bed>>(this.todoResourceURL, { params: param });
  }

  public sendEmailBed(email,name,hospital): Observable<any> {

    const uri = `${this.sendEmailUrlbed}`;
    const obj = {
      name: name,
      email: email,
      hospital: hospital
    };
    return this.http.post(this.rootURL+`${this.sendEmailUrlbed}`, obj);
  }

}
