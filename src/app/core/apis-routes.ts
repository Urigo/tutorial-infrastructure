import {ApiDefinition, ApiVersion, ApiFile} from "./api-definition";
import {Route} from "@angular/router";
import {ApiLoadResolve} from "./api-load-resolve";
import {ApiPageComponent} from "./api-page.component";

export interface ApiRouteDataDefinition {
  apiDefinition: ApiDefinition;
  apiVersion: ApiVersion;
  apiFile: ApiFile
}

export function createApiRoutes(apiDefinition: ApiDefinition) {
  let routes = [];

  apiDefinition.versions.forEach((apiVersion : ApiVersion) => {
    let apiVersionName = apiVersion.name;

    apiDefinition.files.forEach((apiFile: ApiFile) => {
      let fileName = apiFile.apiTitle;
      let apiUrl = apiVersionName + "/" + fileName;

      routes.push(<Route>{
        path: apiUrl,
        component: ApiPageComponent,
        resolve: {
          resolveData: ApiLoadResolve
        },
        data: {
          apiDefinition: apiDefinition,
          apiVersion: apiVersion,
          apiFile: apiFile
        }
      })
    })
  });

  return routes;
}