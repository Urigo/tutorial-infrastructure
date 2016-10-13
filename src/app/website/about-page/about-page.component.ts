import {Component} from "@angular/core";
import * as style from "./about-page.component.scss";
import * as template from "./about-page.component.html";

@Component({
  selector: "about-page",
  template,
  styles: [ style ]
})
export class AboutPageComponent {
  constructor() {}
}
