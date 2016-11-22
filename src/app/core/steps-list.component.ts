import {Injectable, Component, Optional, Input, OnInit, Inject} from '@angular/core';
import { ActivatedTutorial } from './current-tutorial';
import { TutorialStep, TutorialDefinition } from './tutorial-definition';
import { ActivatedRoute, Router } from '@angular/router';
import { StepsUtils } from './step-utils';
import * as template from './steps-list.component.html';

@Component({
  selector: 'steps-list',
  template
})
@Injectable()
export class StepListComponent implements OnInit {
  @Optional() @Input('tutorial') tutorialToDisplay: TutorialDefinition;
  @Optional() @Input('prefix') prefix: string;
  @Optional() @Input('extraLinks') extraLinks: Array<any>;

  private tutorialDetails: TutorialDefinition;

  constructor(private utils: StepsUtils, private router: Router, private activated: ActivatedTutorial, private parentRoute: ActivatedRoute) {
    this.extraLinks = this.extraLinks || [];
  }

  getStepLink(step: TutorialStep) {
    if (this.prefix && this.prefix !== '') {
      return this.prefix + '/' + this.tutorialDetails.baseRoute + '/' + step.url;
    }
    else {
      return this.utils.createAbsoluteLink(".." + step.url, this.parentRoute.firstChild);
    }
  }

  isCurrent(url) {
    return this.router.url === url;
  }

  ngOnInit() {
    if (this.tutorialToDisplay) {
      this.tutorialDetails = this.tutorialToDisplay;
    } else {
      this.activated.tutorial.subscribe((tutorial) => this.tutorialDetails = tutorial);
    }
  }
}
