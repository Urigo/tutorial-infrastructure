import {Injectable, Directive, ElementRef, Renderer} from '@angular/core';
import {ActivatedTutorial} from './current-tutorial';
import {TutorialStep} from './tutorial-definition';

@Directive({
  selector: '[stepName]'
})
@Injectable()
export class StepNameDirective {
  constructor(private activated: ActivatedTutorial, el: ElementRef, renderer: Renderer) {
    activated.step.subscribe((step: TutorialStep) => {
      renderer.setText(el.nativeElement, step.name);
    });
  }
}
