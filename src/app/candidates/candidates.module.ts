import { CandidatesComponent } from './candidate-display/candidate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ReactiveFormsModule } from '@angular/forms'
import { CreateCandidateComponent } from './candidate-create/createCandidate.component';

@NgModule({
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    Ng2SmartTableModule,
    ReactiveFormsModule
    
  ],
  declarations: [
    CandidatesComponent,
    CreateCandidateComponent
    
  ]
})
export class CandidatesModule { }