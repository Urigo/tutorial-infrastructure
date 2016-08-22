import {Component, Injectable} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button";
import * as mainCss from "../assets/style/main.scss";
import {NODE_DIRECTIVES} from "angular2-universal";
import {SharedStylesHost} from "@angular/platform-server/platform_browser_private";
import {StepListComponent} from "./core/steps-list.component";
import {ANGULAR2_METEOR_SOCIALLY} from "./tutorials/angular2-meteor-socially";

@Component({
  selector: "app",
  directives: [ROUTER_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_BUTTON_DIRECTIVES, NODE_DIRECTIVES, StepListComponent],
  templateUrl: "./app.component.html",
  styleUrls: [
    "./app.component.scss"
  ]
})
@Injectable()
export class AppComponent {
  private dropdownOpen: boolean = false;

  constructor(stylesHost: SharedStylesHost) {
    stylesHost.addStyles([mainCss]);
  }

  getDropdownTutorial() {
    return ANGULAR2_METEOR_SOCIALLY;
  }

  getExtraLinks() {
    return [
      {
        link: "/",
        bold: true,
        name: "WhatsApp clone with Angular & Meteor"
      },
      {
        link: "/",
        bold: true,
        name: "Blaze to Angular 2 Migration tutorial"
      }
    ]
  }
}
