import {Injectable, Component, Optional, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivatedTutorial} from './current-tutorial';
import {TutorialStep, TutorialDefinition} from './tutorial-definition';
import {StepsUtils} from './step-utils';

@Component({
  selector: 'steps-list',
  template: `
<ul *ngIf="tutorialDetails" class="tutorial-steps-list">
    <li class="step-item" *ngFor="let step of tutorialDetails.steps; let i = index;" [ngClass]="{'active-step': isCurrent(getStepLink(step))}">
        <a class="step-link" [href]="getStepLink(step)">{{i + 1}}. {{step.name}}</a>
    </li>
    <li class="step-item extra-item" *ngFor="let extraLink of extraLinks;">
        <a [className]="'step-link extra-link ' + (extraLink.bold ? 'bold' : '')" [href]="extraLink.link || ''">{{extraLink.name}}</a>
    </li>
</ul>`
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
      return this.prefix + '/' + this.tutorialDetails.baseRoute + step.url;
    } else {
      return this.utils.createAbsoluteLink('..' + step.url, this.parentRoute.firstChild);
    }
  }

  isCurrent(url) {
    return this.router.url === url;
  }

  ngOnInit() {
    if (this.tutorialToDisplay) {
      let latest: any = {};

      Object.keys(this.tutorialToDisplay.versions).forEach((versionIdentifier: string) => {
         const version = this.tutorialToDisplay.versions[versionIdentifier];

         if (version.isLatest) {
           latest = version;
         }
      });

      this.tutorialDetails = Object.assign(latest, {
        steps: latest.steps
      });
    } else {
      this.activated.tutorial.subscribe((tutorial) => this.tutorialDetails = tutorial);
    }
  }
}
