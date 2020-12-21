import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Data } from '../entities/data';
import { User } from '../entities/user';
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
    return this.http.get(this.config.url + `user/${id}`).pipe(
      map(resp => {
        return resp;
      }), catchError(this.config.handleErrors)
    );
  }

  postUser() { }
  putUser(user: User) {
    return this.http.put(this.config.url + `user`, JSON.stringify(user), {
      headers: this.config.getDefaultHeader()
    }).pipe(
      map((data: any) => {
        if (data.status != 200) {
          catchError(this.config.handleErrors);
        }
        return data;
      }), catchError(this.config.handleErrors)
    );
  }
  deleteUser() { }
}
