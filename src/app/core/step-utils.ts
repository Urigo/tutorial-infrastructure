import {ElementRef, Renderer} from "@angular/core";
import {TutorialDefinition, TutorialStep} from "./tutorial-definition";
import {Router} from "@angular/router";

export class StepsUtils {
  static disableElement(el: ElementRef, renderer: Renderer) {
    renderer.setElementAttribute(el.nativeElement, "disabled", "");
  }

  static appendRouteLink(el: ElementRef, renderer: Renderer, routeLink) {
    renderer.setElementAttribute(el.nativeElement, "href", routeLink);
  }

  static getStepLink(tutorial: TutorialDefinition, step: TutorialStep) {
    return tutorial.baseRoute + step.url;
  }
}