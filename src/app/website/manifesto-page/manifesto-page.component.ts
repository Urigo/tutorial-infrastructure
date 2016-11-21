import {Component} from "@angular/core";
import {PageTitleService} from "../../core/page-title.service";

@Component({
  selector: "manifesto-page",
  templateUrl: "./manifesto-page.component.html"
})
export class ManifestoPageComponent {
  constructor(title: PageTitleService) {
    title.setTitle('Angular-Meteor | Manifesto');
  }
}
