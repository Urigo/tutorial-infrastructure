import {Component} from '@angular/core';
import {PageTitleService} from "../../core/page-title.service";

@Component({
  selector: 'training',
  templateUrl: './training.component.html'
})
export class TrainingPage {
  constructor(title: PageTitleService) {
    title.setTitle('Angular-Meteor | Custom Training');
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
