import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: "api-container",
  templateUrl: "./api-container.component.html",
  directives: [ROUTER_DIRECTIVES],
  styleUrls: [
    "./api-container.component.scss"
  ]
})
export class ApiPageContainerComponent {
  constructor() {

  }
}