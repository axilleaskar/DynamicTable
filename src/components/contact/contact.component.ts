import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactInfo={
    FirstName: "Achilleas",
    LastName:"Karadimas",
    email:"axilleaskaradimas@gmail.com",
    Phone_Number:"+30 697 182 9521"
  }
  constructor() { }

  ngOnInit() {
  }

}
