import { Injectable, Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Directive({
  selector: '[improveThisDocLink]'
})
@Injectable()
export class ImproveThisDocLink implements OnInit {
  @Input('improveThisDocLink') staticRepo: string;

  constructor(private el: ElementRef, private renderer: Renderer, private location: LocationStrategy) {
  }

  getPath(path: string) {
    return path.replace(this.location.getBaseHref(), "/");
  }

  ngOnInit() {
    this.renderer.setElementAttribute(this.el.nativeElement, 'href', this.staticRepo + this.getPath(this.location.path()) + '.html');
  }
}
