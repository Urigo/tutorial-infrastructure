import { Directive, Injectable, ElementRef, OnInit, Renderer } from '@angular/core';
import * as hljs from 'highlight.js';
import * as _ from "lodash";

@Directive({
  selector: 'code'
})
@Injectable()
export class ApiExampleCodeHighlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    if ((this.element.nativeElement.className || '').indexOf('lang-') > -1) {
      let lang = this.element.nativeElement.className.replace('lang-', '');

      if (lang === 'js') {
        lang = 'javascript';
      } else if (lang === 'ts') {
        lang = 'typescript';
      }

      this.element.nativeElement.children.forEach((line) => {
        if (line.type === 'text') {
          const highlighted = hljs.highlight(lang, line.data, true).value;
          let a = this.renderer.createElement(null, 'span');
          this.renderer.setElementProperty(a, 'innerHTML', highlighted);
          this.renderer.attachViewAfter(line, [a]);
          this.renderer.setText(line, '');
        }
      });
    }
  }
}
