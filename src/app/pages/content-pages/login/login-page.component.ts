import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../../../shared/auth/auth.service';
import { ROUTING_PATHS } from '../../../app.constants';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

    @ViewChild('f') loginForm: NgForm;
    public invalidLogin = false;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService,
        private _cookieService: CookieService) { }

    // On submit button click    
    onSubmit() {
        this.authService.signinUser(this.loginForm.value.inputEmail,this.loginForm.value.inputPass)
        .subscribe(res=>{
            if(res != false){
                //this._cookieService.put('JSESSIONID','85B7D5B24BD642DCF52399E949682B60');
                this.router.navigate([ROUTING_PATHS.dashboard]);
                this.loginForm.reset();
            }else{
                this.invalidLogin = true;
                this.loginForm.reset();
            }
           
        })

    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
}