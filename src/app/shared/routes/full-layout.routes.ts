import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  },

  {
    path: 'user',
    loadChildren: './users/users.module#UsersModule'
  },
  

  {
    path: 'candidate',
    loadChildren: './candidates/candidates.module#CandidatesModule'
  }

];