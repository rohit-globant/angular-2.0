import {Component} from 'angular2/core';
import {eventComponent} from './event.component';

@Component({
  selector:'test2',
  templateUrl:'templates/test2.tpl.html',
  directives:[eventComponent]
})

export class test2Component{

}
