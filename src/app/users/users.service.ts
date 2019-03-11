import { UsersModel } from './../shared/models/user.model';

import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpURIs } from './../app.constants';


@Injectable({
    providedIn: "root"
})
export class UsersService {
    httpOptions = {
        headers: new HttpHeaders({
            "accept": "application/json"
        })
    };
    constructor(private http: HttpClient) {
    }

    getAllUsers(): Observable<any> {
        return this.http.get<any>(HttpURIs.baseDomain + HttpURIs.users_json)
            .pipe(
                map((res:UsersModel[]) => {
                    return res;
                })
            )
    }

    addNewUser(user: any) {
        return true
    }

}