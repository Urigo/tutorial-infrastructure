import {Injectable, Component} from "@angular/core";
import {ActivatedTutorial} from "./current-tutorial";
import {TutorialStep, TutorialDefinition} from "./tutorial-definition";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {StepsUtils} from "./step-utils";

@Component({
  selector: "steps-list",
  templateUrl: "./steps-list.component.html",
  directives: [ROUTER_DIRECTIVES]
})
@Injectable()
export class StepListComponent {
  private tutorialDetails : TutorialDefinition;

  constructor(private activated: ActivatedTutorial) {
    activated.tutorial.subscribe((tutorial) => this.tutorialDetails = tutorial);
  }

  getStepLink(step: TutorialStep) {
    return StepsUtils.getStepLink(this.tutorialDetails, step);
  }
}