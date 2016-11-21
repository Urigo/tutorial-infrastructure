import {Injectable, Component, OnInit, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivatedApi } from './current-api';
import { ApiRouteDataDefinition } from './apis-routes';
import {LocationStrategy, APP_BASE_HREF} from '@angular/common';
import { ApiFile, ApiVersion, ApiStaticDefinitionObject, ApiDefinition } from './api-definition';
import * as template from './api-list-items.component.html';

@Component({
  selector: 'api-list-items',
  template
})
@Injectable()
export class ApiListItems implements OnInit {
  private apiData: ApiRouteDataDefinition;

  constructor(@Inject(APP_BASE_HREF) private baseHref: string, private activated: ActivatedApi, private router: Router, private parentRoute: ActivatedRoute, private location: LocationStrategy) {
  }

  createAbsoluteLink(relativeLink: string) {
    const tree = this.router.createUrlTree([relativeLink], { relativeTo: this.parentRoute });
    const abs = this.location.prepareExternalUrl(this.router.serializeUrl(tree));
    return this.baseHref + abs.replace(this.baseHref || '/', '/');
  }

  createLink(api) {
    if (this.apiData.isStaticApi) {
      return this.createAbsoluteLink((<ApiStaticDefinitionObject>this.apiData.apiVersion).version + '/' + api.urlName);
    }
    else {
      return this.createAbsoluteLink((<ApiVersion>this.apiData.apiVersion).name + '/' + api.apiTitle);
    }
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
