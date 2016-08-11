import {
  Injectable,
  OnInit,
  Component,
  DynamicComponentLoader,
  ViewContainerRef
} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {TutorialDefinition, TutorialStep} from "./tutorial-definition";
import {DiffBoxComponent} from "./diffbox.component";
import {StepsTemplatesCache} from "./steps-templates-cache";
import {TutorialRouteData} from "./tutorial-routes";

function generateDynamicComponent(template = "Oops, tutorial template is not available") {
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

  constructor(private stepsTemplatesCache: StepsTemplatesCache,
              private route: ActivatedRoute,
              private dynamicComponentLoader: DynamicComponentLoader,
              private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      let routeData = <TutorialRouteData>data;
      this.tutorial = <TutorialDefinition>routeData.tutorialObject;
      this.step = <TutorialStep>routeData.stepObject;

      this.dynamicComponentLoader.loadNextToLocation(
        generateDynamicComponent(
          this.stepsTemplatesCache.getHtml(
            this.step.name,
            this.tutorial.id)),
        this.viewContainerRef);
    });
  }
}
