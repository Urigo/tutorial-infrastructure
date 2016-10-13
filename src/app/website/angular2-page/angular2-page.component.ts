import {Component} from '@angular/core';
import * as style from './angular2-page.component.scss';
import * as template from './angular2-page.component.html';

@Component({
  selector: 'angular2-page',
  template,
  styles: [ style ]
})
export class Angular2PageComponent {
  constructor() {}
}
