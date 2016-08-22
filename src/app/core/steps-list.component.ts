import {Injectable, Component, Optional, Input, OnInit} from "@angular/core";
import {ActivatedTutorial} from "./current-tutorial";
import {TutorialStep, TutorialDefinition} from "./tutorial-definition";
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from "@angular/router";
import {StepsUtils} from "./step-utils";
import {LocationStrategy} from "@angular/common";

@Component({
  selector: "steps-list",
  templateUrl: "./steps-list.component.html",
  directives: [ROUTER_DIRECTIVES]
})
@Injectable()
export class StepListComponent implements OnInit {
  @Optional() @Input("tutorial") tutorialToDisplay: TutorialDefinition;
  @Optional() @Input("prefix") prefix: string;
  @Optional() @Input("extraLinks") extraLinks: Array<any>;

  private tutorialDetails: TutorialDefinition;

  constructor(private activated: ActivatedTutorial, private router: Router, private parentRoute: ActivatedRoute, private location: LocationStrategy) {
    this.extraLinks = this.extraLinks || [];
  }

  private createAbsoluteLink(relativeLink: string) {
    const tree = this.router.createUrlTree([relativeLink], {relativeTo: this.parentRoute});
    const abs = this.location.prepareExternalUrl(this.router.serializeUrl(tree));

    return (this.prefix || "") + abs;
  }

  getStepLink(step: TutorialStep) {
    return this.createAbsoluteLink(StepsUtils.getStepLink(this.tutorialDetails, step));
  }

  ngOnInit() {
    if (this.tutorialToDisplay) {
      this.tutorialDetails = this.tutorialToDisplay;
    }
    else {
      this.activated.tutorial.subscribe((tutorial) => this.tutorialDetails = tutorial);
    }
  }
}