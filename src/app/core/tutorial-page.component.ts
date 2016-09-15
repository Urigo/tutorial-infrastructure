import {
  Injectable,
  OnInit,
  Component,
  ViewContainerRef
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TutorialDefinition, TutorialStep} from './tutorial-definition';
import {StepsTemplatesCache} from './steps-templates-cache';
import {TutorialRouteData} from './tutorial-routes';
import {ActivatedTutorial} from './current-tutorial';

function generateDynamicComponent(template = 'Oops, tutorial template is not available') {
  @Component({
    selector: 'tutorial-page-content',
    template
  })
  class DynamicComponent {
  }

  return DynamicComponent;
}

@Injectable()
@Component({
  selector: 'tutorial-page',
  template: `<div class='tutorial-container' #dynamic></div>`
})
export class TutorialPage implements OnInit {
  private tutorial: TutorialDefinition;
  private step: TutorialStep;

  constructor(private stepsTemplatesCache: StepsTemplatesCache,
              private route: ActivatedRoute,
              private viewContainerRef: ViewContainerRef,
              private currentTutorial: ActivatedTutorial) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      let routeData = <TutorialRouteData>data;
      this.tutorial = <TutorialDefinition>routeData.tutorialObject;
      this.step = <TutorialStep>routeData.stepObject;

      this.currentTutorial.updateCurrentTutorial(this.tutorial);
      this.currentTutorial.updateCurrentStep(this.step);

      /*this.dynamicComponentLoader.loadNextToLocation(
        generateDynamicComponent(
          this.stepsTemplatesCache.getHtml(
            this.step.name,
            this.tutorial.id)),
        this.viewContainerRef);*/
    });
  }
}
