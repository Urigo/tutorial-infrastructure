import {Component, Injectable} from '@angular/core';
// import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar";
// import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button";
//import * as mainCss from "../assets/style/main.scss";
//import {SharedStylesHost} from "@angular/platform-server/platform_browser_private";
import {ANGULAR2_METEOR_SOCIALLY} from './tutorials/angular2-meteor-socially';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
@Injectable()
export class AppComponent {
  constructor() {
    //stylesHost.addStyles([mainCss]);
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
