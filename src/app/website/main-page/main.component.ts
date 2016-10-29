import {Component, Injectable} from '@angular/core';
import * as style from './main.component.scss';
import * as template from './main.component.html';

@Component({
  selector: 'main',
  template,
  styles: [style]
})
@Injectable()
export class MainComponent {
  constructor() {
  }
}
