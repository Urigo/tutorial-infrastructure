import {Component, Injectable} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivatedTutorial} from "../../core/current-tutorial";
import {TutorialDefinition, TutorialStep} from "../../core/tutorial-definition";
import {ANGULAR2_METEOR_SOCIALLY} from "../../tutorials/angular2-meteor-socially";
import {ANGULAR1_METEOR_SOCIALLY} from "../../tutorials/angular-meteor-socially";
import {StepsUtils} from "../../core/step-utils";
import {LocationStrategy} from "@angular/common";

@Component({
  selector: "tutorial",
  templateUrl: "./tutorials-container.component.html"
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
    if (this.tutorial && (this.tutorial.id === ANGULAR2_METEOR_SOCIALLY.id || this.tutorial.id === ANGULAR1_METEOR_SOCIALLY.id)) {
      let index = this.tutorial.steps.findIndex((s) => {
        return s.template == this.step.template;
      });

      return [
        {
          name: "Angular 1",
          link: this.createAbsoluteLink(StepsUtils.getStepLink(ANGULAR1_METEOR_SOCIALLY, ANGULAR1_METEOR_SOCIALLY.steps[index])),
          active: this.tutorial.id === ANGULAR1_METEOR_SOCIALLY.id
        },
        {
          name: "Angular 2",
          link: this.createAbsoluteLink(StepsUtils.getStepLink(ANGULAR2_METEOR_SOCIALLY, ANGULAR2_METEOR_SOCIALLY.steps[index])),
          active: this.tutorial.id === ANGULAR2_METEOR_SOCIALLY.id
        }
      ]
    }

    return [];
  }
}
