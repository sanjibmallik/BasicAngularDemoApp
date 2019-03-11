import { data } from './../../shared/data/smart-data-table';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: any;
  public source: any;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  settings = {
    actions: true,
    columns: {
      id: {
        title: 'ID',
        filter: true,
        width: '10%'
      },
      firstName: {
        title: 'First Name',
        filter: true,

      },
      lastName: {
        title: 'Last Name',
        filter: true,

      },
      userName: {
        title: 'User Name',
        filter: true,
      },
      emailId: {
        title: 'Email',
        filter: true,
      },
      role: {
        title: 'Role',
        filter: true,
      }
    },
    attr: {
      class: "table table-responsive"
    },
    edit: {
      editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
    }
  };

  ngOnInit() {
    this.route.data.forEach(data => {
      console.log(data)
      this.source = data.userList;
      //this.users = data.userList;
    })
  }

  createNewUser() {
    this.redirectToCreateUser();
  }

  redirectToCreateUser() {
    this.router.navigate(['/user/create-user']);
  }




}
