import {Component} from '@angular/core';
import {PageTitleService} from "../../core/page-title.service";

@Component({
  selector: 'support',
  templateUrl: './support.component.html'
})
export class SupportPage {
  constructor(title: PageTitleService) {
    title.setTitle('Angular-Meteor | Support');
  }
}
