import {
  ApiDefinition, ApiVersion, ApiFile, ApiStaticDefinition, ApiStaticDefinitionObject,
  StaticFileDefinition
} from "./api-definition";
import {Route} from "@angular/router";
import {ApiLoadResolve} from "./api-load-resolve";
import {ApiPageComponent} from "./api-page.component";

export interface ApiRouteDataDefinition {
  isStaticApi: boolean;
  apiDefinition: ApiDefinition | ApiStaticDefinition;
  apiVersion: ApiVersion | ApiStaticDefinitionObject;
  apiFile: ApiFile | StaticFileDefinition
}

export function createApiRoutes(def: ApiDefinition|ApiStaticDefinition) {
  let routes = [];

  if (def['versions'] && def['files']) {
    let apiDefinition = <ApiDefinition>def;

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
            isStaticApi: false,
            apiDefinition: apiDefinition,
            apiVersion: apiVersion,
            apiFile: apiFile
          }
        })
      })
    });
  }
  else if (def['apis']) {
    let apiDefinition = <ApiStaticDefinition>def;

    apiDefinition.apis.forEach((apiItem: ApiStaticDefinitionObject) => {
      let apiVersion = apiItem.version;

      if (apiItem.ref && apiItem.ref != "") {
        let refApiItem = apiDefinition.apis.find((item) => {
          return item.version === apiItem.ref;
        });

        apiItem.files = refApiItem.files;
      }

      apiItem.files.forEach((apiFile: StaticFileDefinition) => {
        let apiUrl = apiVersion + "/" + apiFile.urlName;

        routes.push(<Route>{
          path: apiUrl,
          component: ApiPageComponent,
          resolve: {
            resolveData: ApiLoadResolve
          },
          data: {
            isStaticApi: true,
            apiDefinition: apiDefinition,
            apiVersion: apiItem,
            apiFile: apiFile
          }
        })
      });
    })
  }

  return routes;
}