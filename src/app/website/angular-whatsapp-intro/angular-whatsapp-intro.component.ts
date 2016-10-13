import {Component, OnInit} from "@angular/core";
import {MarkdownFileViewComponent} from "../../core/markdown-file.component";
import {ActivatedRoute} from "@angular/router";
import * as style from "./angular-whatsapp-intro.component.scss";
import * as template from "./angular-whatsapp-intro.component.html";

@Component({
  selector: "angular-whatsapp",
  template,
  directives: [MarkdownFileViewComponent],
  styles: [style]
})
export class AngularWhatsappIntro implements OnInit {
  private isAngular1 = true;

  constructor(private currentRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.currentRoute.url.subscribe((url: Array<{path: string}>) => {
      this.isAngular1 = url[0].path === "whatsapp";
    });
  }
}
