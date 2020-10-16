import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class Config {

    err: any = {};
    url = 'http://192.168.1.109:3004/';
    userId: number;


    constructor(protected http: HttpClient) { }

    getDefaultHeader() {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        return headers;
    }

    handleErrors(error: Response) {
        console.log('ERR from handleErrors(): ' + error);
        this.err = error;
        if (this.err.status === 0) {
            return throwError(this.err.error.message);
        } else if (error.status === 400) {
            return throwError(this.err.error.message);
        }
        return throwError(error);
    }


}
