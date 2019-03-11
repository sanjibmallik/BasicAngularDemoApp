import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    currentLang = 'en';
    toggleClass = 'ft-maximize';
    constructor(public translate: TranslateService, private route: Router,
    public authService: AuthService ) {
        const browserLang: string = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
    }

    ChangeLanguage(language: string) {
        this.translate.use(language);
    }

    ToggleClass() {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else
            this.toggleClass = 'ft-maximize'
    }

    gotoLogout(){
        this.route.navigate(['/pages/login'])
        this.authService.logout()
        .subscribe(res=>{
          
        })
    }
    gotoSetting(){
        this.route.navigate(['/settings'])
    }
}
