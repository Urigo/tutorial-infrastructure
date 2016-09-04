import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {ApiListItems} from "../../core/api-list-items.component";
import {ApiVersionsList} from "../../core/api-versions-list.component";
import {ActivatedApi} from "../../core/current-api";
import {ApiRouteDataDefinition} from "../../core/apis-routes";
import {ApiVersion, ApiStaticDefinitionObject} from "../../core/api-definition";
import {TutorialsVersionsSelection} from "../tutorials-versions/tutorials-versions";
import {ANGULAR2_METEOR_API_REFERENCE} from "../../api-reference/angular2-meteor-api";
import {ANGULAR1_METEOR_API_REFERENCE} from "../../api-reference/angular1-meteor-api";

@Component({
  selector: "api-container",
  templateUrl: "./api-container.component.html",
  directives: [ROUTER_DIRECTIVES, ApiListItems, ApiVersionsList, TutorialsVersionsSelection],
  styleUrls: [
    "./api-container.component.scss"
  ]
})
export class ApiPageContainerComponent {
  private currentApiVersion: string = "";
  private apiData: any;

  constructor(private activated: ActivatedApi) {
    this.activated.api.subscribe((api: ApiRouteDataDefinition) => {
      this.apiData = api;

      if (api.isStaticApi) {
        this.currentApiVersion = (<ApiStaticDefinitionObject>api.apiVersion).version;
      }
      else {
        this.currentApiVersion = (<ApiVersion>api.apiVersion).name;
      }
    })
  }

  getOptions() {
    if (this.apiData) {
      return [
        {
          name: "Angular 1",
          link: "/api/angular-meteor/1.3.11/",
          active: this.apiData.apiDefinition === ANGULAR1_METEOR_API_REFERENCE
        },
        {
          name: "Angular 2",
          link: "/api/angular2-meteor/latest/MeteorComponent",
          active: this.apiData.apiDefinition === ANGULAR2_METEOR_API_REFERENCE
        }
      ];
    }
    else {
      return [];
    }
  }
}