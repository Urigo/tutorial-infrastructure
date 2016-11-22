import {Injectable, Component, OnInit, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivatedApi } from './current-api';
import { ApiRouteDataDefinition } from './apis-routes';
import {LocationStrategy, APP_BASE_HREF} from '@angular/common';
import { ApiDefinition, ApiStaticDefinition, ApiFile, StaticFileDefinition } from './api-definition';
import * as _ from 'lodash';
import * as template from './api-versions-list.component.html';
import {StepsUtils} from "./step-utils";

@Component({
  selector: 'api-versions-list',
  template
})
@Injectable()
export class ApiVersionsList implements OnInit {
  private apiData: ApiRouteDataDefinition;

  constructor(private utils: StepsUtils,private activated: ActivatedApi, private router: Router, private parentRoute: ActivatedRoute, private location: LocationStrategy) {
  }

  createLink(version) {
    let urlSuffix = '';

    if (this.apiData.isStaticApi) {
      urlSuffix = version.files[0].urlName;
    } else {
      const apiDef = <ApiDefinition>this.apiData.apiDefinition;
      let names = _.without(_.map(apiDef.files, item => item.apiTitle), ...(version.exclude || []));
      urlSuffix = names[0];
    }

    return this.utils.createAbsoluteLink('../../' + version.name + '/' + urlSuffix, this.parentRoute.firstChild);
  }

  isCurrent(url) {
    return this.router.url === url;
  }

  getVersionsList(): any {
    if (this.apiData.isStaticApi) {
      return _.map((<ApiStaticDefinition>this.apiData.apiDefinition).apis, (item) => {
        return Object.assign({
          name: item.version
        }, item);
      });
    } else {
      return (<ApiDefinition>this.apiData.apiDefinition).versions;
    }
  }

  ngOnInit() {
    this.activated.api.subscribe((data: any) => {
      this.apiData = data;
    });
  }
}
