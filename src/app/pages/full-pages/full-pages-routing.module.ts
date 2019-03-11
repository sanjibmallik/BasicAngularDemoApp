import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryPageComponent } from "./gallery/gallery-page.component";
import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'gallery',
        component: GalleryPageComponent,
        data: {
          title: 'Gallery Page'
        }
      },
          
      {
        path: 'profile',
        component: UserProfilePageComponent,
        data: {
          title: 'User Profile Page'
        }
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
