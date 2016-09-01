import {Injectable, Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";
import {ActivatedApi} from "./current-api";
import {ApiRouteDataDefinition} from "./apis-routes";
import {LocationStrategy} from "@angular/common";
import * as _ from "lodash";
import {ApiFile} from "./api-definition";

@Component({
  selector: "api-list-items",
  templateUrl: "./api-list-items.component.html",
  directives: [ROUTER_DIRECTIVES]
})
@Injectable()
export class ApiListItems implements OnInit {
  private apiData: ApiRouteDataDefinition;

  constructor(private activated: ActivatedApi, private router: Router, private parentRoute: ActivatedRoute, private location: LocationStrategy) {
  }

  private createAbsoluteLink(relativeLink: string) {
    const tree = this.router.createUrlTree([relativeLink], {relativeTo: this.parentRoute});
    return this.location.prepareExternalUrl(this.router.serializeUrl(tree));
  }

  createLink(apiName) {
    return this.createAbsoluteLink(this.apiData.apiVersion.name + "/" + apiName);
  }

  getFiles() {
    return this.apiData.apiDefinition.files
      .filter((file: ApiFile) => {
        return (this.apiData.apiVersion.exclude || []).indexOf(file.apiTitle) === -1;
      })
      .map((file: ApiFile) => file.apiTitle);
  }

  ngOnInit() {
    this.activated.api.subscribe((data: any) => {
      this.apiData = data;
    });
  }
}