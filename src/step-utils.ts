import {ElementRef, Renderer, Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocationStrategy} from '@angular/common';

@Injectable()
export class StepsUtils {
  constructor(private router: Router, private location: LocationStrategy) {

  }

  disableElement(el: ElementRef, renderer: Renderer) {
    renderer.setElementAttribute(el.nativeElement, 'disabled', '');
  }

  appendRouteLink(el: ElementRef, renderer: Renderer, routeLink: string) {
    renderer.setElementAttribute(el.nativeElement, 'href', routeLink);
  }

  createAbsoluteLink(newRoute: string, currentRoute: ActivatedRoute) {
    const tree = this.router.createUrlTree([newRoute], { relativeTo: currentRoute });
    const asUrl = this.router.serializeUrl(tree);
    return this.location.prepareExternalUrl(asUrl);
  }
}
