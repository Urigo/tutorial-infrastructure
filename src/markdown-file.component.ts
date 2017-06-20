import {Component, Input, OnInit} from '@angular/core';
import {Http} from '@angular/http';
let markdown = require('markdown').markdown;

@Component({
  selector: 'markdown-file',
  template: '<div class="markdown-file-content" [innerHTML]="content"></div>'
})
export class MarkdownFileViewComponent implements OnInit {
  @Input('template') mdFilePath: string;
  private content = '';

  constructor(private http: Http) {

  }

  escapeAngularBindings(html: string): string {
    return html.replace(/<code/g, '<code ngNonBindable');
  }

  ngOnInit() {
    console.log('Will load MD from: ', this.mdFilePath);

    this.http.get(this.mdFilePath)
      .map(res => res.text())
      .map(text => markdown.toHTML(text))
      .map(this.escapeAngularBindings)
      .subscribe(html => this.content = html);
  }
}
