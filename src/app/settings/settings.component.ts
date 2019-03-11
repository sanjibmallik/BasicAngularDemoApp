import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SettingService } from './setting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public setting:any;
  public settingForm: FormGroup

  constructor(private settingService: SettingService) {
    
    this.settingService.getSetting()
    .subscribe(data =>{
      this.setting = data;
      console.log(this.setting)
      this.settingForm.patchValue({

        'bucketName':this.setting.bucketName,
        'bucketUrl':this.setting.bucketURL

      })
  
    })
   }

  ngOnInit() {

    this.settingForm = new FormGroup({
      'bucketName':new FormControl(null,[Validators.required]),
      'bucketUrl':new FormControl(null,[Validators.required]),
    })
  
  }

  saveSetting(){
    console.log(this.settingForm.value)
    alert("sb clicked")
  }
  

}
