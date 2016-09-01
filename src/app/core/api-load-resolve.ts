import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {ApiRouteDataDefinition} from "./apis-routes";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
let doctrine = require("doctrine");

@Injectable()
export class ApiLoadResolve implements Resolve<any> {
  constructor(private http: Http) {

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
      .map(sourceCode => doctrine.parse(sourceCode, {unwrap: true}))
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
