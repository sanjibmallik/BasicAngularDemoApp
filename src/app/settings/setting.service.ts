import { map } from 'rxjs/operators';
import { HttpURIs } from './../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class SettingService{
    constructor(private http: HttpClient){}

    getSetting(){
            return this.http.get(HttpURIs.baseDomain+HttpURIs.baseApi+'settings')
            .pipe(
                map((data:Response) =>{
                    return data;
                })

            )
    }


}