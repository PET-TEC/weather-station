import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Config } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(
    private http: HttpClient,
    private config: Config
  ) { }

  getStationById(id) {
    return this.http.get(this.config.url + `station/${id}`).pipe(
      map(resp => {
        console.log('debug: getStationById: resp = ', resp);
        return resp;
      }), catchError(this.config.handleErrors)
    );
  }

  getStationByUserId(userId) {
    return this.http.get(this.config.url + `station/user/${userId}`).pipe(
      map(resp => {
        return resp;
      }), catchError(this.config.handleErrors)
    );
  }

  getStation() {
    return this.http.get(this.config.url + 'station', {
      headers: this.config.getDefaultHeader()
    }).subscribe(
      (response: any) => {
        if (response.status !== 200) {
          catchError(this.config.handleErrors);
        }
        return response.result;
      },
      error => {
        console.log('ERR from getStation: ' + error);
      }
    );
  }

  getNearestStation(lat: number, lon: number) {
    return this.http.get(this.config.url + `station/${lat}/${lon}`).pipe(
      map(resp => {
        return resp;
      }), catchError(this.config.handleErrors)
    );
  }

  postStation() { }
  putStation() { }
  deleteStation() { }
}
