import {Component} from 'angular2/core';
import {test2Component} from './test2.component';
import {OnInit} from 'angular2/core'

@Component({
    selector: 'test',
    template: `
          <p>Hi! I'm <span [style.color]="inputElement.value === 'yes' ? 'red':''">{{name}}</span> and this is my very first angular 2 component! <span [class.is-awesome]="inputElement.value === 'yes'">It's so awesome!</span><br><br>
            IS it awesome!
          </p>
          <input type='text' #inputElement (keyup)="0">
          <br><br>
          <button [disabled]="inputElement.value !=='yes'">Only enbale if 'yes' was entered</button>
          <test2></test2>
      `,
      styleUrls:['src/css/test.css'],
      directives:[test2Component]
})

export class testComponent implements OnInit{
   name:string;
  ngOnInit():any{
    this.name = 'Rohit';
  }

}
