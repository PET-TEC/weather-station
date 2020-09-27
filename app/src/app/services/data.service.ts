import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config.service';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient,
    private config: Config
  ) { }

  getDataById(id) {
    return this.http.get(this.config.url + `data/station/${id}`).pipe(
      map(resp => {
        return resp[0];
      }), catchError(this.config.handleErrors)
    );
  }

  getData() {
    return this.http.get(this.config.url + 'data', {
      headers: this.config.getDefaultHeader()
    }).subscribe(
        (response: any) => {
          if (response.status !== 200) {
            catchError(this.config.handleErrors);
          }
          return response.result;
        },
        error => {
          console.log('ERR from getData: ' + error);
        }
    );
  }

  postData() { }
  putSData() { }
  deleteData() { }
}
