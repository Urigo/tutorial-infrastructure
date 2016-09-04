import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {ApiListItems} from "../../core/api-list-items.component";
import {ApiVersionsList} from "../../core/api-versions-list.component";
import {ActivatedApi} from "../../core/current-api";
import {ApiRouteDataDefinition} from "../../core/apis-routes";
import {ApiVersion, ApiStaticDefinitionObject} from "../../core/api-definition";

@Component({
  selector: "api-container",
  templateUrl: "./api-container.component.html",
  directives: [ROUTER_DIRECTIVES, ApiListItems, ApiVersionsList],
  styleUrls: [
    "./api-container.component.scss"
  ]
})
export class ApiPageContainerComponent {
  currentApiVersion: string = "";

  constructor(private activated: ActivatedApi) {
    this.activated.api.subscribe((api:ApiRouteDataDefinition) => {
      if (api.isStaticApi) {
        this.currentApiVersion = (<ApiStaticDefinitionObject>api.apiVersion).version;
      }
      else {
        this.currentApiVersion = (<ApiVersion>api.apiVersion).name;
      }
    })
  }
}