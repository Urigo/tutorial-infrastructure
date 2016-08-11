import {Component, Injectable} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: "tutorial",
  directives: [ROUTER_DIRECTIVES],
  templateUrl: "./tutorials-container.component.html",
  styleUrls: [
    "./tutorials-container.component.scss"
  ]
})
@Injectable()
export class TutorialsContainer {
  constructor() {}
}
