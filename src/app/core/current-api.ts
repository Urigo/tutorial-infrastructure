import {Subject} from "rxjs";
import {ApiRouteDataDefinition} from "./apis-routes";

export class ActivatedApi {
  public api:Subject<any>;

  constructor() {
    this.api = new Subject<ApiRouteDataDefinition>();
  }

  updateCurrentApi(api: ApiRouteDataDefinition) {
    this.api.next(api);
  }
}