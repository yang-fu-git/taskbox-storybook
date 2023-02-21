import { Component,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  template: `
     <app-button></app-button>`,
})
export class AppComponent {
  title = 'taskbox';
}
