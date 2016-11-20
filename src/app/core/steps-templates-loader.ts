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

  convertToHtmlTags(tutorialName: string, markdown: string): string {
    return markdown.replace(/\{\{\{diff_step (.*?)\}\}\}/g, (allMatch, stepNumber) => {
      return `<diffbox tutorial="${tutorialName}" step="${stepNumber}"></diffbox>`;
    });
  }

  public load(tutorialName, url?: string): Observable<any> {
    return this.http
      .get(url)
      .map(res => res.text())
      .map(this.convertToHtmlTags.bind(this, tutorialName))
      .map(text => marked(text))
      .map(this.escapeAngularBindings);
  }
}
