import {Component, Injectable, ElementRef, Renderer} from '@angular/core';
import {ANGULAR2_METEOR_SOCIALLY} from './tutorials/angular2-meteor-socially';
import * as mainCss from "../assets/style/main.scss";
import * as style from './app.component.scss';
import * as template from './app.component.html';

@Component({
  selector: 'app',
  template,
  styles: [ style ]
})
@Injectable()
export class AppComponent {
  constructor(eRef: ElementRef, renderer: Renderer) {
    let parent = eRef.nativeElement.parent;
    let styleElement = renderer.createElement(parent, "style");
    renderer.setElementProperty(styleElement, "type", "text/css");
    renderer.setText(styleElement, mainCss);
  }

  getDropdownTutorial() {
    return ANGULAR2_METEOR_SOCIALLY;
  }

  getExtraLinks() {
    return [
      {
        link: '/tutorials/whatsapp',
        bold: true,
        name: 'WhatsApp clone with Angular & Meteor'
      },
      {
        link: '/tutorials/migration/angular2/introduction',
        bold: true,
        name: 'Blaze to Angular 2 Migration tutorial'
      }
    ];
  }
}
