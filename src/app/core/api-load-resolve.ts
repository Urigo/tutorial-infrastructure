import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {ApiRouteDataDefinition} from "./apis-routes";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {ActivatedApi} from "./current-api";
import {StaticFileDefinition, ApiFile, ApiDefinition, ApiVersion, ApiStaticDefinitionObject} from "./api-definition";
import {Observable} from "rxjs";
let jsdoc2md = require("jsdoc-to-markdown");
var marked = require('marked');

@Injectable()
export class ApiLoadResolve implements Resolve<any> {
  constructor(private http: Http, private activated: ActivatedApi) {

  }

  resolve(route: ActivatedRouteSnapshot): any {
    let routeData: ApiRouteDataDefinition = <ApiRouteDataDefinition>route.data;

    if (routeData.isStaticApi) {
      let apiFile = <StaticFileDefinition>routeData.apiFile;
      let apiDefinition = <ApiStaticDefinitionObject>routeData.apiDefinition;
      let apiVersion = <string>routeData.apiVersion;

      return this.http
        .get(apiFile.markdownFilePath)
        .map(res => res.text())
        .map(text => marked(text))
        .map(parsedDocs => {
          return {
            jsDoc: parsedDocs,
            apiName: apiFile.name
          };
        });
    }
    else {
      let apiFile = <ApiFile>routeData.apiFile;
      let apiDefinition = <ApiDefinition>routeData.apiDefinition;
      let apiVersion = <ApiVersion>routeData.apiVersion;

      let repo = apiFile.apiRepository || apiDefinition.apiRepository;
      let revision = apiFile.revision || apiVersion.revision;
      let filePath = apiFile.filePath;
      let ghUrl = "https://raw.githubusercontent.com/" + repo + "/" + revision + "/" + filePath;

      return this.http
        .get(ghUrl)
        .map(res => res.text())
        .map(sourceCode => jsdoc2md.renderSync({source: sourceCode, cache: false}))
        .map(text => marked(text))
        .map(parsedDocs => {
          return {
            jsDoc: parsedDocs,
            revision: revision,
            repo: repo,
            filePath: filePath,
            apiName: apiFile.apiTitle
          }
        });
    }
  }
}
