import {Component} from "@angular/core";
import {ActivatedApi} from "../../core/current-api";
import {ApiRouteDataDefinition} from "../../core/apis-routes";
import {ApiVersion, ApiStaticDefinitionObject, ApiFile, StaticFileDefinition} from "../../core/api-definition";
import {ANGULAR2_METEOR_API_REFERENCE} from "../../api-reference/angular2-meteor-api";
import {ANGULAR1_METEOR_API_REFERENCE} from "../../api-reference/angular1-meteor-api";
import * as _ from "lodash";
import {Router} from "@angular/router";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {PageTitleService} from "../../core/page-title.service";

@Component({
  selector: "api-container",
  templateUrl: "./api-container.component.html"
})
export class ApiPageContainerComponent {
  private currentApiVersion: string = '';
  private apiData: any;

  constructor(private activated: ActivatedApi, title: PageTitleService) {
    this.activated.api.subscribe((api: ApiRouteDataDefinition) => {
      this.apiData = api;
      let titleComponent = "";

      if (api.isStaticApi) {
        this.currentApiVersion = (<ApiStaticDefinitionObject>api.apiVersion).version;
        titleComponent = (<StaticFileDefinition>api.apiFile).name;
      }
      else {
        this.currentApiVersion = (<ApiVersion>api.apiVersion).visibleName || (<ApiVersion>api.apiVersion).name;
        titleComponent = (<ApiFile>api.apiFile).apiTitle;
      }

      title.setTitle(`API | ${api.apiDefinition.name} (${this.currentApiVersion}) | ${titleComponent}`);
    })
  }

  getOptions() {
    if (this.apiData && (_.isEqual(this.apiData.apiDefinition, ANGULAR1_METEOR_API_REFERENCE) || _.isEqual(this.apiData.apiDefinition, ANGULAR2_METEOR_API_REFERENCE))) {
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
