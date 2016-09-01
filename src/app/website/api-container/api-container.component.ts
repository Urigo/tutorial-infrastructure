import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {ApiListItems} from "../../core/api-list-items.component";
import {ApiVersionsList} from "../../core/api-versions-list.component";

@Component({
  selector: "api-container",
  templateUrl: "./api-container.component.html",
  directives: [ROUTER_DIRECTIVES, ApiListItems, ApiVersionsList],
  styleUrls: [
    "./api-container.component.scss"
  ]
})
export class ApiPageContainerComponent {
  constructor() {

  }
}