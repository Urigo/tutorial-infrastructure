import {Injectable, Directive, ElementRef, Renderer} from '@angular/core';
import {ActivatedTutorial} from './current-tutorial';
import {TutorialStep, TutorialDefinition} from './tutorial-definition';
import {Observable} from 'rxjs';

@Directive({
  selector: '[stepDownloadZip]'
})
@Injectable()
export class StepDownloadZipLink {
  constructor(private activated: ActivatedTutorial, el: ElementRef, renderer: Renderer) {
    Observable.zip(activated.tutorial, activated.step, activated.steps, (tutorial, step, steps) => {
      return {
        tutorial,
        step,
        steps
      };
    }).subscribe((data) => {
      let tutorial: TutorialDefinition = data.tutorial;
      let step: TutorialStep = data.step;
      let steps: TutorialStep[] = data.steps;

      if (step.noZipDownload) {
        renderer.setElementStyle(el.nativeElement, 'display', 'none');
      } else {
        let index = steps.findIndex((s) => {
          return s.template === step.template;
        });

        if (index <= 0) {
          renderer.setElementStyle(el.nativeElement, 'display', 'none');
          return;
        }

        let tagName = 'step' + index;
        let url = 'https://github.com/' + tutorial.gitHub + '/archive/' + tagName + '.zip';

        renderer.setElementAttribute(el.nativeElement, 'href', url);
      }
    });
  }
}
