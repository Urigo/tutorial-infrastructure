import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { ORIGIN_URL } from 'angular2-platform-node';
let markdown = require('markdown').markdown;

@Injectable()
export class StepsTemplatesCache {
  private cache: Map<string, string>;

  constructor(private http: Http, @Inject(ORIGIN_URL) private originUrl: string) {
    this.cache = new Map<string, string>();
  }

  escapeAngularBindings(html: string): string {
    return html.replace(/<code/g, '<code ngNonBindable');
  }

  unescapeDiffBox(html: string): string {
    return html.replace(/(&lt;diffbox.*?&gt;)/g, (res) => {
      return res.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    }).replace(/&lt;\/diffbox&gt;/g, '</diffbox>');
  }

  public load(step: string, tutorialId: string, fallbackUrl?: string): Observable<any> {
    let obs = this.http
      .get(fallbackUrl)
      .map(res => res.text())
      .map(text => markdown.toHTML(text))
      .map(this.escapeAngularBindings)
      .map(this.unescapeDiffBox);

    return obs;
  }
}
