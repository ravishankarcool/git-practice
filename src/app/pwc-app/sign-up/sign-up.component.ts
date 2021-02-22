import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  template: `
  <form #formdata="ngForm" (ngSubmit)="saveTempDetails(formdata.value)">

  <app-input [label]="'Enter your name'" [typeValue]="'string'"  [placeholder]="'Enter Your name'"  [nameAttribute]="'userName'" ></app-input>
  <br><br> <br>
  <app-input [label]="'Enter your password'" [typeValue]="'password'" [placeholder]="'Enter Your  password'" [nameAttribute]="'password'" ></app-input>
  <br>
  
  <app-button [buttonlabel]="'Login form'" (newItemEvent)="buttonClick($event)"></app-button>
  </form>
  `,
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

 

  constructor() { }
  

  ngOnInit() {
  }
  saveTempDetails(data){
    console.log(data.password);
  }
  buttonClick(e)
  {
    console.log(e);
  }

}
