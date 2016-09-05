import {Component, Injectable} from "@angular/core";
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from "@angular/router";
import {StepListComponent} from "../../core/steps-list.component";
import {TutorialNavigation} from "../../core/tutorial-navigation.component";
import {StepNameDirective} from "../../core/tutorial-name.directive";
import {ActivatedTutorial} from "../../core/current-tutorial";
import {TutorialDefinition, TutorialStep} from "../../core/tutorial-definition";
import {TutorialsVersionsSelection} from "../tutorials-versions/tutorials-versions";
import {ANGULAR2_METEOR_SOCIALLY} from "../../tutorials/angular2-meteor-socially";
import {ANGULAR1_METEOR_SOCIALLY} from "../../tutorials/angular-meteor-socially";
import {StepsUtils} from "../../core/step-utils";
import {LocationStrategy} from "@angular/common";
import {CodeDiffLink} from "../../core/tutorial-code-diff.directive";
import {ImproveThisDocLink} from "../../core/improve-this-doc.directive";

@Component({
  selector: "tutorial",
  directives: [ROUTER_DIRECTIVES, StepListComponent, TutorialsVersionsSelection, ImproveThisDocLink, CodeDiffLink, TutorialNavigation, StepNameDirective],
  templateUrl: "./tutorials-container.component.html",
  styleUrls: [
    "./tutorials-container.component.scss"
  ]
})
@Injectable()
export class TutorialsContainer {
  private tutorial: TutorialDefinition;
  private step: TutorialStep;

  constructor(current: ActivatedTutorial, private router: Router, private parentRoute: ActivatedRoute, private location: LocationStrategy) {
    current.tutorial.subscribe(tutorial => this.tutorial = tutorial);
    current.step.subscribe(step => this.step = step);
  }

  private createAbsoluteLink(relativeLink: string) {
    const tree = this.router.createUrlTree([relativeLink], {relativeTo: this.parentRoute});
    return this.location.prepareExternalUrl(this.router.serializeUrl(tree));
  }

  getStaticRepo() {
    return "https://github.com/Urigo/tutorial-infrastructure/edit/master/static-website";
  }

  getOptions() {
    if (this.tutorial === ANGULAR2_METEOR_SOCIALLY || this.tutorial === ANGULAR1_METEOR_SOCIALLY) {
      let index = this.tutorial.steps.findIndex((s) => {
        return s == this.step;
      });

      return [
        {
          name: "Angular 1",
          link: this.createAbsoluteLink(StepsUtils.getStepLink(ANGULAR1_METEOR_SOCIALLY, ANGULAR1_METEOR_SOCIALLY.steps[index])),
          active: this.tutorial === ANGULAR1_METEOR_SOCIALLY
        },
        {
          name: "Angular 2",
          link: this.createAbsoluteLink(StepsUtils.getStepLink(ANGULAR2_METEOR_SOCIALLY, ANGULAR2_METEOR_SOCIALLY.steps[index])),
          active: this.tutorial === ANGULAR2_METEOR_SOCIALLY
        }
      ]
    }

    return [];
  }
}
