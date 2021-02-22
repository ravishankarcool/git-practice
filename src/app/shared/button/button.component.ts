import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-button',
  template: `
  <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button (click)="buttonClick(btn.value)" #btn>{{buttonlabel}}</button>

`
  ,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }
@Input() buttonlabel:string;
@Output() newItemEvent = new EventEmitter<string>();
  ngOnInit() {
  }
  
  buttonClick(){
    this.newItemEvent.emit('CLICKED');
      // console.log('buttonclick')
  }
}
