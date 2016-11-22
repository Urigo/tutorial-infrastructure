import {Injectable, Component, OnInit, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivatedApi } from './current-api';
import { ApiRouteDataDefinition } from './apis-routes';
import {LocationStrategy, APP_BASE_HREF} from '@angular/common';
import { ApiFile, ApiVersion, ApiStaticDefinitionObject, ApiDefinition } from './api-definition';
import * as template from './api-list-items.component.html';
import {StepsUtils} from "./step-utils";

@Component({
  selector: 'api-list-items',
  template
})
@Injectable()
export class ApiListItems implements OnInit {
  private apiData: ApiRouteDataDefinition;

  constructor(private router: Router, private utils: StepsUtils, private activated: ActivatedApi, private parentRoute: ActivatedRoute) {
  }

  createLink(api) {
    if (this.apiData.isStaticApi) {
      return this.utils.createAbsoluteLink("../../" + (<ApiStaticDefinitionObject>this.apiData.apiVersion).version + '/' + api.urlName, this.parentRoute);
    }
    else {
      return this.utils.createAbsoluteLink("../../" + (<ApiVersion>this.apiData.apiVersion).name + '/' + api.apiTitle, this.parentRoute);
    }
  }

  isCurrent(url) {
    return this.router.url === url;
  }


  getFiles() : any {
    if (this.apiData.isStaticApi) {
      let staticData = <ApiStaticDefinitionObject>this.apiData.apiVersion;

      return staticData.files.map((item) => {
        return {
          apiTitle: item.name,
          urlName: item.urlName
        };
      });
    } else {
      return (<ApiDefinition>this.apiData.apiDefinition).files
        .filter((file: ApiFile) => {
          return ((<ApiVersion>this.apiData.apiVersion).exclude || []).indexOf(file.apiTitle) === -1;
        });
    }
  }

  ngOnInit() {
    this.activated.api.subscribe((data: any) => {
      this.apiData = data;
    });
  }
}
