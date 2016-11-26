import {Component} from "@angular/core";
import {ActivatedApi} from "../../core/current-api";
import {ApiRouteDataDefinition} from "../../core/apis-routes";
import {
  ApiVersion, ApiStaticDefinitionObject, ApiFile, StaticFileDefinition,
  ApiDefinition
} from "../../core/api-definition";
import {ANGULAR2_METEOR_API_REFERENCE} from "../../api-reference/angular2-meteor-api";
import {ANGULAR1_METEOR_API_REFERENCE} from "../../api-reference/angular1-meteor-api";
import {PageTitleService} from "../../core/page-title.service";
import * as _ from "lodash";

@Component({
  selector: "api-container",
  templateUrl: "./api-container.component.html"
})
export class ApiPageContainerComponent {
  private currentApiVersion: string = '';
  private apiData: any;
  private deprecationInfo: {
    deprecated: string;
    removedIn?: string;
    notice?: string;
  };

  constructor(private activated: ActivatedApi, title: PageTitleService) {
    this.activated.api.subscribe((api: ApiRouteDataDefinition) => {
      this.apiData = api;
      let titleComponent = "";

      if (api.isStaticApi) {
        this.currentApiVersion = (<ApiStaticDefinitionObject>api.apiVersion).version;
        const file: StaticFileDefinition = <StaticFileDefinition>api.apiFile;
        titleComponent = file.name;

        if (file.deprecated) {
          this.deprecationInfo = {
            deprecated: file.deprecated,
            removedIn: file.removedIn
          }
        }
      }
      else {
        this.currentApiVersion = (<ApiVersion>api.apiVersion).visibleName || (<ApiVersion>api.apiVersion).name;
        titleComponent = (<ApiFile>api.apiFile).apiTitle;

        const apiDef = <ApiDefinition>api.apiDefinition;

        if (apiDef.deprecations && apiDef.deprecations[titleComponent]) {
          let depData = apiDef.deprecations[titleComponent];

          this.deprecationInfo = {
            deprecated: depData.inVersion,
            removedIn: depData.removedIn,
            notice: depData.notice
          }
        }
      }

      title.setTitle(`API | ${api.apiDefinition.name} (${this.currentApiVersion}) | ${titleComponent}`);
    })
  }

  getOptions() {
    if (this.apiData && (_.isEqual(this.apiData.apiDefinition, ANGULAR1_METEOR_API_REFERENCE) || _.isEqual(this.apiData.apiDefinition, ANGULAR2_METEOR_API_REFERENCE))) {
      return [
        {
          name: "Angular 1",
          link: "api/angular-meteor/1.3.11/subscribe",
          active: _.isEqual(this.apiData.apiDefinition, ANGULAR1_METEOR_API_REFERENCE)
        },
        {
          name: "Angular 2",
          link: "api/angular2-meteor/latest/Meteor+RxJS",
          active: _.isEqual(this.apiData.apiDefinition, ANGULAR2_METEOR_API_REFERENCE)
        }
      ];
    }
    else {
      return [];
    }
  }
}
