import {Injectable, Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {ActivatedApi} from "./current-api";
import {ApiRouteDataDefinition} from "./apis-routes";

@Component({
  selector: "api-list-items",
  templateUrl: "./api-list-items.component.html",
  directives: [ROUTER_DIRECTIVES]
})
@Injectable()
export class ApiListItems implements OnInit {
  private apiData: ApiRouteDataDefinition;

  constructor(private activated: ActivatedApi) {

  }

  ngOnInit() {
    this.activated.api.subscribe((data: any) => {
      this.apiData = data;
    });
  }
}