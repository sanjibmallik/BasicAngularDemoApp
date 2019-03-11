import { UserDetailsResolverService } from './user-resolver.service';
import { CreateUserComponent } from './user-create/createUser.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './user-display/users.component';

const routes: Routes = [
      {
        path: '',
        children:[
          {
            path:'users',
            component: UsersComponent,
            resolve:{
              userList: UserDetailsResolverService
            }
          },
          {
            path: 'create-user',
            component: CreateUserComponent,
          }]
        }
      
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }