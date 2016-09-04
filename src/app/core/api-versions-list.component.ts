import {Injectable, Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";
import {ActivatedApi} from "./current-api";
import {ApiRouteDataDefinition} from "./apis-routes";
import {LocationStrategy} from "@angular/common";
import {ApiDefinition, ApiStaticDefinition, ApiFile, StaticFileDefinition} from "./api-definition";
import * as _ from "lodash";

@Component({
  selector: "api-versions-list",
  templateUrl: "./api-versions-list.component.html",
  directives: [ROUTER_DIRECTIVES]
})
@Injectable()
export class ApiVersionsList implements OnInit {
  private apiData: ApiRouteDataDefinition;

  constructor(private activated: ActivatedApi, private router: Router, private parentRoute: ActivatedRoute, private location: LocationStrategy) {
  }

  private createAbsoluteLink(relativeLink: string) {
    const tree = this.router.createUrlTree([relativeLink], {relativeTo: this.parentRoute});
    return this.location.prepareExternalUrl(this.router.serializeUrl(tree));
  }

  createLink(version) {
    let urlSuffix = "";

    if (this.apiData.isStaticApi) {
      urlSuffix = (<StaticFileDefinition>this.apiData.apiFile).urlName;
    }
    else {
      urlSuffix = (<ApiFile>this.apiData.apiFile).apiTitle;
    }

    return this.createAbsoluteLink(version.name + "/" + urlSuffix);
  }

  getVersionsList() {
    if (this.apiData.isStaticApi) {
      return _.map((<ApiStaticDefinition>this.apiData.apiDefinition).apis, (item) => {
        return {
          name: item.version
        }
      });
    }
    else {
      return (<ApiDefinition>this.apiData.apiDefinition).versions;
    }
  }

  ngOnInit() {
    this.activated.api.subscribe((data: any) => {
      this.apiData = data;
    });
  }
}