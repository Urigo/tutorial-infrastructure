import {Component, Input} from "@angular/core";

@Component({
  selector: "tutorials-versions",
  styles: [
    `
        .tutorial-version {
            margin-left: 10px;
        }
        
        .active {
            color: #b3e5fc !important;
        }
    `
  ],
  template: `<a md-raised-button [className]="'tutorial-version md-primary ' + (option.active ? 'active' : '')" *ngFor="let option of options" [href]="option.link">{{option.name}}</a>`
})
export class TutorialsVersionsSelection {
  @Input("options") options : Array<any>;

  constructor() {}
}