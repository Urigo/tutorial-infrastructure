import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {ApiListItems} from "../../core/api-list-items.component";

@Component({
  selector: "api-container",
  templateUrl: "./api-container.component.html",
  directives: [ROUTER_DIRECTIVES, ApiListItems],
  styleUrls: [
    "./api-container.component.scss"
  ]
})
export class ApiPageContainerComponent {
  constructor() {

  }
}