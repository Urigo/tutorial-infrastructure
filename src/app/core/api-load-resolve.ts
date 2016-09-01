import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {ApiRouteDataDefinition} from "./apis-routes";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {ActivatedApi} from "./current-api";
let jsdoc2md = require("jsdoc-to-markdown");
var marked = require('marked');

@Injectable()
export class ApiLoadResolve implements Resolve<any> {
  constructor(private http: Http, private activated: ActivatedApi) {

  }

  resolve(route: ActivatedRouteSnapshot): any {
    let routeData: ApiRouteDataDefinition = <ApiRouteDataDefinition>route.data;
    let repo = routeData.apiDefinition.apiRepository;
    let revision = routeData.apiVersion.revision;
    let filePath = routeData.apiFile.filePath;
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
          apiName: routeData.apiFile.apiTitle
        }
      });
  }
}
