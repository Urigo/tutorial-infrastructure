import {Component} from '@angular/core';
import {PageTitleService} from "../../core/page-title.service";

@Component({
  selector: 'consulting',
  templateUrl: './consulting.component.html'
})
export class ConsultingPage {
  constructor(title: PageTitleService) {
    title.setTitle('Angular-Meteor | Consulting');

    title.setSeoDescription("Our core team and partners can help you develop your next Angular-Meteor project");
    title.addKeywords([
      "support",
      "help",
      "team",
      "troubleshoot",
      "consulting",
      "training"
    ]);
  }
}
