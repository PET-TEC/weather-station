import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
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
    return this.http.get(this.config.url + `station/${id}`, {
      headers: this.config.getDefaultHeader()
    }).subscribe(
      (response: any) => {
        if (response.status !== 200) {
          catchError(this.config.handleErrors);
        }
        return response.result;
      },
      error => {
        console.log('ERR from getStationById: ' + error);
      }
    );
  }

  getStationByUserId(userId) {
    return this.http.get(this.config.url + `station/user/${userId}`, {
      headers: this.config.getDefaultHeader()
    }).subscribe(
      (response: any) => {
        if (response.status !== 200) {
          catchError(this.config.handleErrors);
        }
        return response.result;
      },
      error => {
        console.log('ERR from getStationByUserId: ' + error);
      }
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

  postStation() { }
  putStation() { }
  deleteStation() { }
}
