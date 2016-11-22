import {Component, Injectable, ElementRef, Renderer} from '@angular/core';
import {ANGULAR2_METEOR_SOCIALLY} from './tutorials/angular2-meteor-socially';
import * as mainCss from "../assets/style/main.scss";
import {PageTitleService} from "./core/page-title.service";

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
@Injectable()
export class AppComponent {
  constructor(eRef: ElementRef, renderer: Renderer, seo: PageTitleService) {
    let parent = eRef.nativeElement.parent;
    let styleElement = renderer.createElement(parent, "style");
    renderer.setElementProperty(styleElement, "type", "text/css");
    renderer.setText(styleElement, mainCss);

    seo.setTitle("Angular-Meteor - realtime full stack JavaScript development");
    seo.setBasePath(global['basePath'] || '/');
  }

  getDropdownTutorial() {
    return ANGULAR2_METEOR_SOCIALLY;
  }

  getExtraLinks() {
    return [
      {
        link: 'tutorials/whatsapp2-tutorial',
        bold: true,
        name: 'WhatsApp clone with Angular & Meteor'
      },
      {
        link: 'tutorials/migration/angular2/introduction',
        bold: true,
        name: 'Blaze to Angular 2 Migration tutorial'
      },
      {
        link: 'training',
        bold: true,
        name: 'Custom Training'
      }
    ];
  }
}
