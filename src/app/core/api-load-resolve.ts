import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiRouteDataDefinition } from './apis-routes';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedApi } from './current-api';
import { StaticFileDefinition, ApiFile, ApiDefinition, ApiVersion } from './api-definition';
let jsdoc2md = require('jsdoc-to-markdown');
let marked = require('marked');

@Injectable()
export class ApiLoadResolve implements Resolve<any> {
  constructor(private http: Http) {}

  escapeAngularBindings(html: string): string {
    return html.replace(/[{}]/g, (match) => {
      return "<span>{{ '" + match + "' }}</span>";
    });
  }

  resolve(route: ActivatedRouteSnapshot): any {
    let routeData: ApiRouteDataDefinition = <ApiRouteDataDefinition>route.data;

    if (routeData.isStaticApi) {
      let apiFile = <StaticFileDefinition>routeData.apiFile;

      return this.http
        .get(apiFile.markdownFilePath)
        .map(res => res.text())
        .map(text => marked(text))
        .map(this.escapeAngularBindings)
        .map(parsedDocs => {
          return {
            jsDoc: parsedDocs,
            apiName: apiFile.name
          };
        });
    } else {
      let apiFile = <ApiFile>routeData.apiFile;
      let apiDefinition = <ApiDefinition>routeData.apiDefinition;
      let apiVersion = <ApiVersion>routeData.apiVersion;

      let repo = apiFile.apiRepository || apiDefinition.apiRepository;
      let revision = apiFile.revision || apiVersion.revision;
      let filePath = apiFile.filePath;
      let ghUrl = 'https://raw.githubusercontent.com/' + repo + '/' + revision + '/' + filePath;

      console.log(ghUrl);

      return this.http
        .get(ghUrl)
        .map(res => res.text())
        .map(sourceCode => jsdoc2md.renderSync({ source: sourceCode, 'no-cache': true }))
        .map(text => marked(text))
        .map(this.escapeAngularBindings)
        .map(parsedDocs => {
          return {
            jsDoc: parsedDocs,
            revision: revision,
            repo: repo,
            filePath: filePath,
            apiName: apiFile.apiTitle
          };
        });
    }
  }
}
