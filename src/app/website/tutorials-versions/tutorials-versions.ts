import {Component, Input} from "@angular/core";

@Component({
  selector: "tutorials-versions",
  templateUrl: "./tutorial-versions.html"
})
export class TutorialsVersionsSelection {
  @Input("options") options : Array<any>;

  constructor() {}
}
