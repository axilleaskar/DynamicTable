import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Form, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { interval } from "rxjs";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit {
  @Input() data
  @Input() mode:string;
  @Output() formValue = new EventEmitter()
  @Output() formValueEdit = new EventEmitter()
  controls = [];
  userGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userGroup = this.createFormGroup(this.data);
    console.log(this.mode)
  }

  checkIfItemIsObject(item): boolean {
    return typeof item == "object" ? true : false;
  }

  createFormGroup(data): FormGroup {
    let group = new FormGroup({});
    Object.entries(data).map((item) => {
      if (this.checkIfItemIsObject(item[1])) {
        this.createFormGroup(item[1]);
        Object.entries(item[1]).map((next) => {
          group.addControl(item[0], this.createFormGroup(item[1]));
        });
      } else {
        group.addControl(item[0], new FormControl(""));
      }
    });
    // this.controls = [...this.controls,...controls]
    return group;
  }

  checkIfIsFormGroup(control){
    if(control instanceof FormGroup){
      return true
    }else{
      return false
    }
  }

  sendDataToParent(){
    console.log(this.mode)
    if(this.mode == "create"){
      this.formValue.emit(this.userGroup.value)
    }else{
      this.formValueEdit.emit(this.userGroup.value)
    }
  }
}
