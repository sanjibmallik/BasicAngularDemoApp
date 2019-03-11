import { Injectable } from '@angular/core';
import { Router, Resolve, 
        RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';         
import { UsersService } from './users.service';


@Injectable()
export class UserDetailsResolverService implements Resolve<any> {
  constructor( private _userService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._userService.getAllUsers()
    .map(data => {
      if (data) {
        return data.userList;
      }else{
          return null;
      }
    });
  }
}