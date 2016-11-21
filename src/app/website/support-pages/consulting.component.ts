import {Component} from '@angular/core';
import {PageTitleService} from "../../core/page-title.service";

@Component({
  selector: 'consulting',
  templateUrl: './consulting.component.html'
})
export class ConsultingPage {
  constructor(title: PageTitleService) {
    title.setTitle('Angular-Meteor | Consulting');
  }
}
