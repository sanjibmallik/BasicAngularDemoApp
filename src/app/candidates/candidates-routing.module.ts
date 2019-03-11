import { CreateCandidateComponent } from './candidate-create/createCandidate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesComponent } from './candidate-display/candidate.component';

const routes: Routes = [
      {
        path: '',
        children:[
          {
            path:'candidates',
            component: CandidatesComponent,
            data: {
              title: 'All Candidate'
            }

          }
          ,{
            path: 'create-candidate',
            component: CreateCandidateComponent,
            data: {
              title: 'Create Candidate'
            }
          }
        ]
        }
      
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatesRoutingModule { }