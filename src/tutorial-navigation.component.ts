import {Injectable, Directive, ElementRef, Renderer, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

import {ActivatedTutorial} from './current-tutorial';
import {TutorialStep, TutorialDefinition} from './tutorial-definition';
import {StepsUtils} from './step-utils';

@Directive({
  selector: '[tutorialNavigation]'
})
@Injectable()
export class TutorialNavigation {
  @Input('tutorialNavigation') tutorialNavigation: string;

  constructor(private activated: ActivatedTutorial,
              el: ElementRef,
              renderer: Renderer,
              private currentRoute: ActivatedRoute,
              private utils: StepsUtils) {
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
          utils.disableElement(el, renderer);
        } else {
          let next = tutorial.steps[index + 1];

          if (next) {
            utils.appendRouteLink(el, renderer, utils.createAbsoluteLink('../' + next.url, this.currentRoute.firstChild));
          } else {
            utils.disableElement(el, renderer);
          }
        }
      } else if (this.tutorialNavigation === 'previous') {
        if (index === 0) {
          utils.disableElement(el, renderer);
        } else {
          let previous = tutorial.steps[index - 1];

          if (previous) {
            utils.appendRouteLink(el, renderer, utils.createAbsoluteLink('../' + previous.url, this.currentRoute.firstChild));
          } else {
            utils.disableElement(el, renderer);
          }
        }
      }
    });
  }
}
