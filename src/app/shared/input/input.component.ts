import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  template: '{{label}} : <input [type]="typeValue" [placeholder]="placeholder" [name] ="nameAttribute">',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
   
  data:string;
  @Input() label:string;
  @Input() typeValue:string;
  @Input() placeholder:string;
  @Input() nameAttribute:string;
 
  ngOnInit() {
  }
 inputValue()
 {

 }
}
