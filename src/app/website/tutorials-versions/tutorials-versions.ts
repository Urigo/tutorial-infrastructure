import {Component, Input} from "@angular/core";
import * as style from "./tutorial-versions.scss";
import * as template from "./tutorial-versions.html";

@Component({
  selector: "tutorials-versions",
  styles: [style],
  template
})
export class TutorialsVersionsSelection {
  @Input("options") options : Array<any>;

  constructor() {}
}
