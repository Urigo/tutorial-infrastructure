import {Component} from "@angular/core";
import {MarkdownFileViewComponent} from "../../core/markdown-file.component";

@Component({
  selector: "manifesto-page",
  templateUrl: "./manifesto-page.component.html",
  directives: [MarkdownFileViewComponent],
  styleUrls: [
    "./manifesto-page.component.scss"
  ]
})
export class ManifestoPageComponent {
  constructor() {}
}