import {Component} from '@angular/core';
import {PageTitleService} from "../../core/page-title.service";

@Component({
  selector: 'support',
  templateUrl: './support.component.html'
})
export class SupportPage {
  constructor(title: PageTitleService) {
    title.setTitle('Angular-Meteor | Support');
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
