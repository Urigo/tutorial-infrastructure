import {Component, Injectable} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar";

@Component({
  selector: "app",
  directives: [ROUTER_DIRECTIVES, MD_TOOLBAR_DIRECTIVES],
  templateUrl: "./app.component.html",
  styleUrls: [
    "./app.component.scss"
  ]
})
@Injectable()
export class AppComponent {
  constructor() {
  }
}
