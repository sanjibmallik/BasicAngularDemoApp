import { UserDetailsResolverService } from './user-resolver.service';
import { UsersComponent } from './user-display/users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ReactiveFormsModule } from '@angular/forms'
import { CreateUserComponent } from './user-create/createUser.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    Ng2SmartTableModule,
    ReactiveFormsModule
    
  ],
  declarations: [
    UsersComponent,
    CreateUserComponent
    
  ],
  providers:[
    UserDetailsResolverService
  ]
})
export class UsersModule { }