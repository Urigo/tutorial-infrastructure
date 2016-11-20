import {Component} from "@angular/core";
import {ActivatedApi} from "../../core/current-api";
import {ApiRouteDataDefinition} from "../../core/apis-routes";
import {ApiVersion, ApiStaticDefinitionObject} from "../../core/api-definition";
import {ANGULAR2_METEOR_API_REFERENCE} from "../../api-reference/angular2-meteor-api";
import {ANGULAR1_METEOR_API_REFERENCE} from "../../api-reference/angular1-meteor-api";
import * as _ from "lodash";

@Component({
  selector: "api-container",
  templateUrl: "./api-container.component.html"
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
        this.currentApiVersion = (<ApiVersion>api.apiVersion).visibleName || (<ApiVersion>api.apiVersion).name;
      }
    })
  }

  getOptions() {
    if (this.apiData) {
      return [
        {
          name: "Angular 1",
          link: "/api/angular-meteor/1.3.11/",
          active: _.isEqual(this.apiData.apiDefinition, ANGULAR1_METEOR_API_REFERENCE)
        },
        {
          name: "Angular 2",
          link: "/api/angular2-meteor/latest/MeteorComponent",
          active: _.isEqual(this.apiData.apiDefinition, ANGULAR2_METEOR_API_REFERENCE)
        }
      ];
    }
    else {
      return [];
    }
  }
}

