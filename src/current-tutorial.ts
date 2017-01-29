import { Subject } from 'rxjs';
import { TutorialDefinition, TutorialStep } from './tutorial-definition';

export class ActivatedTutorial {
  public tutorial: Subject<TutorialDefinition>;
  public step: Subject<TutorialStep>;
  public steps: Subject<TutorialStep[]>;

  constructor() {
    this.step = new Subject<TutorialStep>();
    this.tutorial = new Subject<TutorialDefinition>();
    this.steps = new Subject<TutorialStep[]>();
  }

  updateCurrentTutorial(tutorial: TutorialDefinition) {
    this.tutorial.next(tutorial);
  }

  updateCurrentStep(step: TutorialStep) {
    this.step.next(step);
  }

  updateCurrentSteps(steps: TutorialStep[]) {
    this.steps.next(steps);
  }
}
