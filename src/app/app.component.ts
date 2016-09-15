import {Component, Injectable, Inject} from '@angular/core';
import * as mainCss from '../assets/style/main.scss';
import {ANGULAR2_METEOR_SOCIALLY} from './tutorials/angular2-meteor-socially';
import {__platform_browser_private__} from '@angular/platform-browser';
let SharedStylesHost = __platform_browser_private__.SharedStylesHost;

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
@Injectable()
export class AppComponent {
  constructor(@Inject(SharedStylesHost) sharedStylesHost: any) {
    sharedStylesHost.addStyles([mainCss]);
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
