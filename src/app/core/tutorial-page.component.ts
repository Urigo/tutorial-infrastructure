import {Injectable, OnInit, Component, DynamicComponentLoader, ViewContainerRef} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {TutorialDefinition, TutorialStep} from "./tutorial-definition";
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {DiffBoxComponent} from "./diffbox.component";
import {StepsTemplatesCache} from "./steps-templates-cache";

function generateDyanmicComponent(template = "Oops, tutorial template is not available") {
  @Component({
    template,
    directives: [DiffBoxComponent]
  })
  class DynamicComponent {
  }

  return DynamicComponent;
}

@Injectable()
@Component({
  selector: "tutorial",
  template: `<div class="tutorial-container" #dynamic></div>`
})
export class TutorialPage implements OnInit {
  private tutorial: TutorialDefinition;
  private step: TutorialStep;

  constructor(
    private stepsTemplatesCache : StepsTemplatesCache,
    private route: ActivatedRoute,
    private dynamicComponentLoader: DynamicComponentLoader,
    private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.route.data.subscribe((routeData: any) => {
      this.tutorial = <TutorialDefinition>routeData.tutorialObject;
      this.step = <TutorialStep>routeData.stepObject;
      this.dynamicComponentLoader.loadNextToLocation(generateDyanmicComponent(this.stepsTemplatesCache.getHtml(this.step.name, this.tutorial.id)), this.viewContainerRef);
    });
  }
}