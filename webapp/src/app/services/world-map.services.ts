import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';


@Injectable()
  export class WorldMapService {
    public rootURL = 'https://covid-193.p.rapidapi.com/statistics';
    public headerDict = {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '8d53a0ab3bmsh9c2405c8a5175c6p113ad3jsn70b733786097'
      };
    public requestOptions = {
        headers: new HttpHeaders(this.headerDict),
      };

    constructor(private http: HttpClient) {}


    private extractData(res: Response) {
        const myObjStr = JSON.stringify(res);
        const jsonObj: any = JSON.parse(myObjStr);

        return jsonObj;
      }

    // get covid cases across all countries
    getAllCountryCases(): Observable<any[]> {
        return this.http.get(this.rootURL, this.requestOptions)
        .pipe(map(this.extractData));
      }
}
