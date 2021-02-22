import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  template: `
  <form #formdata="ngForm" (ngSubmit)="saveTempDetails(formdata.value)">

  <app-input [label]="'Enter your name'" [type]="'string'"  [placeholder]="'Enter Your name'" ></app-input>
  <br><br> <br>
  <app-input [label]="'Enter your password'" [type]="'password'" [placeholder]="'Enter Your  password'"></app-input>
  <br>
<button type="submit">submit</button>
  </form>
  `,
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username:string;
  constructor() { }
  

  ngOnInit() {
  }
  saveTempDetails(data){
    console.log(data);
  }

}
