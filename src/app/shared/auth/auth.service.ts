import { Auth_object } from './../models/auth.model';
import { HttpURIs } from './../../app.constants';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private http: HttpClient) { }

  signupUser(email: string, password: string) {

  }

  signinUser(email: string, password: string): Observable<any> {
    return this.http.get<any>(HttpURIs.baseDomain + HttpURIs.auth_json)
      .pipe(
        map((res:Auth_object) => {
          if(res.username === email && res.password === password){
            return res;
          }
          else{
            return false
          }
        })
      )

  }



  logout() {
    return this.http.get<any>(HttpURIs.baseDomain + HttpURIs.baseApi + 'logout')
      .pipe(
        map(res => {
          return res;
        })
      )

  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token 
    return true;
  }
}
