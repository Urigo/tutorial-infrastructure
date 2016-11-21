import {
  ApiDefinition, ApiVersion, ApiFile, ApiStaticDefinition, ApiStaticDefinitionObject,
  StaticFileDefinition
} from './api-definition';
import {Route} from '@angular/router';
import {ApiLoadResolve} from './api-load-resolve';
import {ApiPageComponent} from './api-page.component';
import * as _ from 'lodash';

export interface ApiRouteDataDefinition {
  isStaticApi: boolean;
  apiDefinition: ApiDefinition | ApiStaticDefinition;
  apiVersion: ApiVersion | ApiStaticDefinitionObject;
  apiFile: ApiFile | StaticFileDefinition;
}

export function createApiRoutes(def: ApiDefinition|ApiStaticDefinition) {
  let routes = [];

  if (def['versions'] && def['files']) {
    let apiDefinition = <ApiDefinition>def;

    apiDefinition.versions.forEach((apiVersion : ApiVersion) => {
      let apiVersionName = apiVersion.name;

      apiDefinition.files.forEach((apiFile: ApiFile) => {
        let fileName = apiFile.apiTitle;
        let apiUrl = apiVersionName + '/' + fileName;

        if (apiVersion.exclude && apiVersion.exclude.indexOf(fileName) === -1) {
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
          });
        }
      });
    });
  } else if (def['apis']) {
    let apiDefinition = <ApiStaticDefinition>def;

    apiDefinition.apis.forEach((apiItem: ApiStaticDefinitionObject) => {
      let apiVersion = apiItem.version;

      if (apiItem.ref && apiItem.ref != '') {
        let refApiItem = apiDefinition.apis.find((item) => {
          return item.version === apiItem.ref;
        });

        apiItem.files = refApiItem.files;
      }

      if (apiItem.alongWith && apiItem.alongWith != '') {
        let alongApiItem = apiDefinition.apis.find((item) => {
          return item.version === apiItem.alongWith;
        });

        let withoutDups = _.filter(alongApiItem.files, (item: StaticFileDefinition) => {
          let found = apiItem.files.find((existsItem) => {
            return existsItem.name === item.name;
          });

          return !found;
        });

        apiItem.files = apiItem.files.concat(withoutDups);
      }

      let redirectionUrl = '/';

      apiItem.files.forEach((apiFile: StaticFileDefinition, index) => {
        let apiUrl = apiVersion + '/' + apiFile.urlName;

        if (index === 0) {
          redirectionUrl = apiUrl;
        }

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
        });
      });

      routes.push(<Route>{
        path: apiVersion,
        redirectTo: redirectionUrl
      });
    });
  }

  return routes;
}
