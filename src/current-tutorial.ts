import { Subject } from 'rxjs';
import { TutorialDefinition, TutorialStep } from './tutorial-definition';

export class ActivatedTutorial {
  public tutorial: Subject<TutorialDefinition>;
  public step: Subject<TutorialStep>;
  public steps: Subject<TutorialStep[]>;
  public gitTagRevision: Subject<string>;

  constructor() {
    this.step = new Subject<TutorialStep>();
    this.tutorial = new Subject<TutorialDefinition>();
    this.steps = new Subject<TutorialStep[]>();
    this.gitTagRevision = new Subject<string>();
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

  updateCurrentGitTagRevision(gitTagRevision: string) {
      this.gitTagRevision.next(gitTagRevision);
  }
}
