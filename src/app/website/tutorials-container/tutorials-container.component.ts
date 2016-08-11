import {Component, Injectable} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {StepListComponent} from "../../core/steps-list.component";
import {TutorialNavigation} from "../../core/tutorial-navigation.component";

@Component({
  selector: "tutorial",
  directives: [ROUTER_DIRECTIVES, StepListComponent, TutorialNavigation],
  templateUrl: "./tutorials-container.component.html",
  styleUrls: [
    "./tutorials-container.component.scss"
  ]
})
@Injectable()
export class TutorialsContainer {
  constructor() {

  }
}
