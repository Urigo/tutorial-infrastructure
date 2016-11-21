import {Injectable, Component, OnInit, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivatedApi } from './current-api';
import { ApiRouteDataDefinition } from './apis-routes';
import {LocationStrategy, APP_BASE_HREF} from '@angular/common';
import { ApiDefinition, ApiStaticDefinition, ApiFile, StaticFileDefinition } from './api-definition';
import * as _ from 'lodash';
import * as template from './api-versions-list.component.html';

@Component({
  selector: 'api-versions-list',
  template
})
@Injectable()
export class ApiVersionsList implements OnInit {
  private apiData: ApiRouteDataDefinition;

  constructor(@Inject(APP_BASE_HREF) private baseHref: string,private activated: ActivatedApi, private router: Router, private parentRoute: ActivatedRoute, private location: LocationStrategy) {
  }

  createAbsoluteLink(relativeLink: string) {
    const tree = this.router.createUrlTree([relativeLink], { relativeTo: this.parentRoute });
    const abs = this.location.prepareExternalUrl(this.router.serializeUrl(tree));
    return this.baseHref + abs.replace(this.baseHref || '/', '/');
  }


  createLink(version) {
    let urlSuffix = '';

    if (this.apiData.isStaticApi) {
      urlSuffix = (<StaticFileDefinition>this.apiData.apiFile).urlName;
    } else {
      urlSuffix = (<ApiFile>this.apiData.apiFile).apiTitle;
    }

    return this.createAbsoluteLink(version.name + '/' + urlSuffix);
  }

  getVersionsList() {
    if (this.apiData.isStaticApi) {
      return _.map((<ApiStaticDefinition>this.apiData.apiDefinition).apis, (item) => {
        return {
          name: item.version
        };
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
