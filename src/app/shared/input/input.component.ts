import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  template: '{{label}} : <input [type]="type" [placeholder]="placeholder" [(ngModel)]="data" name="data" (keyup.enter)="inputValue()">',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
   
  data:string;
  @Input() label:string;
  @Input() type:string;
  @Input() placeholder:string;
  
 
  ngOnInit() {
  }
 inputValue()
 {

 }
}
