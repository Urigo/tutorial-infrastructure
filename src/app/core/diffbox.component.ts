import {Input, Inject, Host, Component, forwardRef} from "@angular/core";
import {TutorialRegistryCache} from "./tutorials-registry-cache";
import {PatchDefinition} from "./patch-definition";
import {Observable} from "rxjs";
import {OnInit} from "@angular/core";
import {Optional} from "@angular/core";

@Component({
  selector: "diffbox",
  template: `<div class="diffbox">{{tutorial}}</div>`
})
export class DiffBoxComponent implements OnInit {
  @Input("step") step: string;
  @Optional() @Input("filename") filename: string;
  @Input("tutorial") tutorial: string;
  private patch : PatchDefinition;

  constructor(private registry : TutorialRegistryCache) {}

  ngOnInit() {
    let patchData = this.registry.getObject(this.tutorial);
    console.log(patchData[this.step]);

    if (!this.filename) {
      //let files = Object.keys()
    }
  }
}