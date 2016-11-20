import { Injectable, Directive, ElementRef, Renderer, Input } from '@angular/core';
import { ActivatedTutorial } from './current-tutorial';
import { TutorialStep, TutorialDefinition } from './tutorial-definition';
import { Observable } from 'rxjs';
import { StepsUtils } from './step-utils';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Directive({
  selector: '[tutorialNavigation]'
})
@Injectable()
export class TutorialNavigation {
  @Input('tutorialNavigation') tutorialNavigation: string;

  constructor(
    private activated: ActivatedTutorial,
    el: ElementRef,
    renderer: Renderer,
    private router: Router,
    private parentRoute: ActivatedRoute,
    private location: LocationStrategy) {
    Observable.zip(activated.tutorial, activated.step, (tutorial, step) => {
      return {
        tutorial,
        step
      };
    }).subscribe((data: any) => {
      let tutorial: TutorialDefinition = data.tutorial;
      let step: TutorialStep = data.step;

      let index = tutorial.steps.findIndex((s) => {
        return s.template === step.template;
      });

      if (this.tutorialNavigation === 'next') {
        if (index === tutorial.steps.length - 1) {
          StepsUtils.disableElement(el, renderer);
        } else {
          let next = tutorial.steps[index + 1];

          if (next) {
            StepsUtils.appendRouteLink(el, renderer, this.createAbsoluteLink(StepsUtils.getStepLink(tutorial, next)));
          } else {
            StepsUtils.disableElement(el, renderer);
          }
        }
      } else if (this.tutorialNavigation === 'previous') {
        if (index === 0) {
          StepsUtils.disableElement(el, renderer);
        } else {
          let previous = tutorial.steps[index - 1];

          if (previous) {
            StepsUtils.appendRouteLink(el, renderer, this.createAbsoluteLink(StepsUtils.getStepLink(tutorial, previous)));
          } else {
            StepsUtils.disableElement(el, renderer);
          }
        }
      }
    });
  }

  private createAbsoluteLink(relativeLink: string) {
    const tree = this.router.createUrlTree([relativeLink], { relativeTo: this.parentRoute });
    return this.location.prepareExternalUrl(this.router.serializeUrl(tree));
  }
}
