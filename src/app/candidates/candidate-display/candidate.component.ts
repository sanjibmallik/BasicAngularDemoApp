import { CandidatesService } from '../candidates.service';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: []
})
export class CandidatesComponent implements OnInit {

  public users: any;
  public source: any;
  
  constructor(private candidatesService: CandidatesService, private router: Router) { 
    this.candidatesService.getAllUsers()
    .subscribe(res => {this.source = res;
                      this.users = res;
                    }
    ) 
    }

    settings = {
      actions: false,
      columns: {
        candidateId: {
          title: 'ID',
          filter: true,
          width: '10%'
        },
        fullName: {
          title: 'Full Name',
          filter: true,
        },
        cellPhoneNumber: {
          title: 'Contact Number',
          filter: true,
        },
        emailId: {
          title: 'Email',
          filter: true,
        },
        subVendorName: {
          title: 'Sub Vendor',
          filter: true,
        }
      },
      attr: {
        class: "table table-responsive"
      },
      edit:{
        editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
      },
      delete:{
        deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
      }
    };
    
  ngOnInit() {
    

  }

  createNewUser(){

  }

  redirectToCreateCandidate(){
      this.router.navigate(['/candidate/create-candidate']);
  }

 


}
