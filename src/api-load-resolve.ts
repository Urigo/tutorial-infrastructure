import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiRouteDataDefinition } from './apis-routes';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { StaticFileDefinition, ApiFile, ApiDefinition, ApiVersion } from './api-definition';
import * as _ from 'lodash';
let jsdoc2md = require('jsdoc-to-markdown');
let marked = require('marked');

@Injectable()
export class ApiLoadResolve implements Resolve<any> {
  constructor(private http: Http) {}

  escapeAngularBindings(html: string): string {
    return html.replace(/[{}]/g, (match) => {
      return '<span>{{ \'' + match + '\' }}</span>';
    });
  }

  resolve(route: ActivatedRouteSnapshot): any {
    let routeData: ApiRouteDataDefinition = <ApiRouteDataDefinition>route.data;

    if (routeData.isStaticApi) {
      let apiFile = <StaticFileDefinition>routeData.apiFile;

      console.log('Loading URL: ', apiFile.markdownFilePath);

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
      let filePath = apiFile.filePath || apiFile.mdFile;

      let url = 'https://raw.githubusercontent.com/' + repo + '/' + revision + '/' + filePath;

      if (filePath.charAt(0) === '/' && filePath.toLowerCase().indexOf('.md') > -1) {
        url = filePath;
      }

      return this.http
        .get(url)
        .map(res => res.text())
        .map((sourceCode) => {
          let fileExt = _.last(filePath.split('.')).toLowerCase();

           if (fileExt === 'md') {
             return sourceCode;
           }

           return jsdoc2md.renderSync({ source: sourceCode, 'no-cache': true });
        })
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
