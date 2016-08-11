import {Subject} from "rxjs";
import {TutorialDefinition, TutorialStep} from "./tutorial-definition";

export class ActivatedTutorial {
  public tutorial:Subject<TutorialDefinition>;
  public step:Subject<TutorialStep>;

  constructor() {
    this.step = new Subject();
    this.tutorial = new Subject();
  }

  updateCurrentTutorial(tutorial: TutorialDefinition) {
    this.tutorial.next(tutorial);
  }

  updateCurrentStep(step: TutorialStep) {
    this.step.next(step);
  }
}