import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class Config {

    err: any = {};
    url = '';


    constructor(protected http: HttpClient) { }

    getDefaultHeader() {
        let headers = new HttpHeaders();
        headers = headers.append('', '');
        headers = headers.append('Content-Type', 'application/json');
        return headers;
    }

    handleErrors(error: Response) {
        console.log('ERR from handleErrors(): ' + error);
        this.err = error;
        if (this.err.status === 0) {
            return throwError('Error');
        } else if (error.status === 400) {
            return throwError(this.err.error.message);
        }
        return throwError(error);
    }


}
