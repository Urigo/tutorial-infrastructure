import { Directive, Injectable, ElementRef, OnInit, Renderer } from '@angular/core';
import * as hljs from 'highlight.js';

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

      const highlighted = hljs.highlight(lang, this.element.nativeElement.children[0].data, true).value;
      this.renderer.setElementProperty(this.element.nativeElement, 'innerHTML', highlighted);
    }
  }
}
