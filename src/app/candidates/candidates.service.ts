import { HttpURIs } from './../app.constants';

import { map, filter, tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable({
    providedIn:"root"
})
export class CandidatesService {
     httpOptions = {
        headers: new HttpHeaders({
            "accept": "application/json"
        })
      };
    constructor(private http: HttpClient){

    };


     getAllUsers(): Observable<any> {

      return this.http.get<any>(HttpURIs.baseDomain+HttpURIs.baseApi+'candidates', {
         'withCredentials': true,
          headers:this.httpOptions.headers 
    })
    .pipe(
        map(res => {
            for(let obj of res){
            obj.fullName = obj.firstName +' '+ obj.lastName;
            }
            console.log(res);
            return res;
            })
    )
    }

    getDemoUsers(){
        return true
    }

    addNewUser(user: any){
        return true
    }

}