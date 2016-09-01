import {createApiRoutes} from "../core/apis-routes";
import {ANGULAR2_METEOR_API_REFERENCE} from "./angular2-meteor-api";

export const APIS_ROUTES = [{
  path: "api",
  children: [
    {
      path: "angular2-meteor",
      children: createApiRoutes(ANGULAR2_METEOR_API_REFERENCE)
    }
  ]
}];