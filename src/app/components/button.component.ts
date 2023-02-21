import { Component, OnInit } from '@angular/core';
import { Button } from '../button.model';
@Component({
  selector: 'app-button',
  // templateUrl: './button.component.html',
  
  template: `
  <button type="button">Default</button>`,

  // styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  button:Button;

  constructor() { }

  ngOnInit(): void {
  }

}
