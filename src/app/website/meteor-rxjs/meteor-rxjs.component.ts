import {Component} from '@angular/core';
import {PageTitleService} from "../../core/page-title.service";

@Component({
  selector: 'meteor-rxjs',
  templateUrl: './meteor-rxjs.component.html'
})
export class MeteorRxJsPage {
  constructor(title: PageTitleService) {
    title.setTitle('Angular-Meteor | Meteor-RxJS');
  }
}
