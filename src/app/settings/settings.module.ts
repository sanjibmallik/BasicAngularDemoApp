import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule { }