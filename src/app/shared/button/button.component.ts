import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <br>
   <button>Submit</button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
