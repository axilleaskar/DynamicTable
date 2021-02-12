import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() group: any
  controls = []
  constructor() {

  }

  ngOnInit() {
    this.controls = Object.entries(this.group.controls)

  }

  isFormGroup(control){
    if(control instanceof FormGroup){
      return true
    }else{
      return false
    }
  }

}
