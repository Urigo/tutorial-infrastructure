import {Component, Input} from "@angular/core";

@Component({
  selector: "tutorials-versions",
  styleUrls: [ "./tutorial-versions.scss" ],
  templateUrl: "./tutorial-versions.html"
})
export class TutorialsVersionsSelection {
  @Input("options") options : Array<any>;

  constructor() {}
}
