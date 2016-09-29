import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Registration } from './registration';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegistrationService {

    private readonly URL = '/fk_apps/TFPREST/public/tfpAnmalning?testanrop=true';

    constructor(private http: Http) { }

    public putRegistration(registration: Registration) {
        console.log(`Sending`, registration);
        return this.http.put(this.URL, registration)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.log(errMsg);
        return Observable.throw(errMsg);
    }

}
