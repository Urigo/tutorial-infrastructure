import {Injectable, Directive, ElementRef, Renderer} from '@angular/core';
import {ActivatedTutorial} from './current-tutorial';
import {TutorialStep, TutorialDefinition} from './tutorial-definition';
import {Observable} from 'rxjs';

@Directive({
  selector: '[codeDiffLink]'
})
@Injectable()
export class CodeDiffLink {
  constructor(private activated: ActivatedTutorial, el: ElementRef, renderer: Renderer) {
    Observable.zip(activated.tutorial, activated.step, (tutorial, step) => {
      return {
        tutorial,
        step
      };
    }).subscribe((data) => {
      let tutorial: TutorialDefinition = data.tutorial;
      let step: TutorialStep = data.step;

      if (step.hideCodeDiff) {
        renderer.setElementAttribute(el.nativeElement, 'disabled', '');
      } else {
        let index = tutorial.steps.findIndex((s) => {
          return s.template === step.template;
        });

        let compareStart = '';

        if (index > 0) {
          compareStart = 'step' + (index);
        } else {
          compareStart = tutorial.firstCommitCompare;
        }

        let compareEnd = 'step' + (index + 1);
        let url = 'https://github.com/' + tutorial.gitHub + '/compare/' + compareStart + '...' + compareEnd;

        renderer.setElementAttribute(el.nativeElement, 'href', url);
      }
    });
  }

  pad(n, width, z = '0') {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
}
