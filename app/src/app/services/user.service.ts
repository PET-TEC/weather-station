import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Config } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private config: Config
  ) { }

  getUser() {
    return this.http.get(this.config.url + 'user', {
      headers: this.config.getDefaultHeader()
    }).subscribe(
      (response: any) => {
        if (response.status !== 200) {
          catchError(this.config.handleErrors);
        }
        return response.result;
      },
      error => {
        console.log('ERR from getUserById: ' + error);
      }
    );
  }

  getUserById(id) {
    return this.http.get(this.config.url + `user/${id}`, {
      headers: this.config.getDefaultHeader()
    }).subscribe(
      (response: any) => {
        if (response.status !== 200) {
          catchError(this.config.handleErrors);
        }
        return response.result;
      },
      error => {
        console.log('ERR from getUserById: ' + error);
      }
    );
  }

  postUser() { }
  putSUser() { }
  deleteUser() { }
}
