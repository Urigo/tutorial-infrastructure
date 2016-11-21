import {Injectable, Component, Optional, Input, OnInit, Inject} from '@angular/core';
import { ActivatedTutorial } from './current-tutorial';
import { TutorialStep, TutorialDefinition } from './tutorial-definition';
import { ActivatedRoute, Router } from '@angular/router';
import { StepsUtils } from './step-utils';
import {LocationStrategy, APP_BASE_HREF} from '@angular/common';
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

  constructor(@Inject(APP_BASE_HREF) private baseHref: string, private activated: ActivatedTutorial, private router: Router, private parentRoute: ActivatedRoute, private location: LocationStrategy) {
    this.extraLinks = this.extraLinks || [];
  }

  createAbsoluteLink(relativeLink: string) {
    const tree = this.router.createUrlTree([relativeLink], { relativeTo: this.parentRoute });
    const abs = this.location.prepareExternalUrl(this.router.serializeUrl(tree));
    return (this.prefix || '') + abs.replace(this.baseHref || '/', '/');
  }

  getStepLink(step: TutorialStep) {
    return this.createAbsoluteLink(StepsUtils.getStepLink(this.tutorialDetails, step));
  }

  ngOnInit() {
    if (this.tutorialToDisplay) {
      this.tutorialDetails = this.tutorialToDisplay;
    } else {
      this.activated.tutorial.subscribe((tutorial) => this.tutorialDetails = tutorial);
    }
  }
}
