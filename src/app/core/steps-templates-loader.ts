import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
let markdown = require('markdown').markdown;
let marked = require('marked');

@Injectable()
export class StepsTemplatesLoader {
  private cache: Map<string, string>;

  constructor(private http: Http) {
    this.cache = new Map<string, string>();
  }

  escapeAngularBindings(html: string): string {
    return html.replace(/[{}]/g, (match) => {
      return "<span>{{ '" + match + "' }}</span>";
    });
  }

  public load(fallbackUrl?: string): Observable<any> {
    return this.http
      .get(fallbackUrl)
      .map(res => res.text())
      .map(text => marked(text))
      .map(this.escapeAngularBindings);
  }
}
