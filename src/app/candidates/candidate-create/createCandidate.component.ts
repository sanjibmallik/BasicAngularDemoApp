import { CandidatesService } from '../candidates.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validator, Validators } from '@angular/forms'
import { NGXToastrService } from '../../shared/toastr/toastr.service';


@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: []
})

export class CreateCandidateComponent implements OnInit {
   userFrom: FormGroup

   constructor(private router: Router, private route: ActivatedRoute, private toastr: NGXToastrService,private candidateService: CandidatesService){

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
      this.candidateService.addNewUser(this.userFrom.value);
      this.router.navigate(['/user/users']);
      this.toastr.typeSuccess();
      

    }


}