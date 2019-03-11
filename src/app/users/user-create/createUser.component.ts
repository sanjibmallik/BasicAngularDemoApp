import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validator, Validators } from '@angular/forms'
import { NGXToastrService } from '../../shared/toastr/toastr.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: []
})

export class CreateUserComponent implements OnInit {
   userFrom: FormGroup

   constructor(private router: Router, private route: ActivatedRoute, private toastr: NGXToastrService,private userService: UsersService){

    }
    ngOnInit(){
        this.userFrom = new FormGroup({
          'firstName':new FormControl(null,[Validators.required]),
          'lastName':new FormControl(null,[Validators.required]),
          'emailId':new FormControl(null,[Validators.required, Validators.email])
        })

    }

    gotoOtherPage(){
      this.router.navigate(['/user/users']);
    }

    submitForm(){
      this.userService.addNewUser(this.userFrom.value);
      this.router.navigate(['/user/users']);
      this.toastr.typeSuccess();
      

    }


}