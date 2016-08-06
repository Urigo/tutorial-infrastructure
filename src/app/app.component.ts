import {Component, Injectable} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: "app",
  directives: [ROUTER_DIRECTIVES],
  template: "<router-outlet></router-outlet>"
})
@Injectable()
export class AppComponent {
  constructor(router : Router) {
    router.events.subscribe(console.log);
  }
}
