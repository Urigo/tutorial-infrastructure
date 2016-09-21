import { DiffBoxComponent } from './diffbox.component';
import {
  Injectable,
  OnInit,
  Component,
  ViewContainerRef,
  Compiler,
  NgModule,
  ReflectiveInjector
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TutorialDefinition, TutorialStep } from './tutorial-definition';
import { StepsTemplatesCache } from './steps-templates-cache';
import { TutorialRouteData } from './tutorial-routes';
import { ActivatedTutorial } from './current-tutorial';

@Injectable()
@Component({
  selector: 'tutorial-page',
  template: `<div class='tutorial-container'></div>`
})
export class TutorialPage implements OnInit {
  private tutorial: TutorialDefinition;
  private step: TutorialStep;

  constructor(
    private stepsTemplatesCache: StepsTemplatesCache,
    private route: ActivatedRoute,
    private compiler: Compiler,
    private viewContainerRef: ViewContainerRef,
    private currentTutorial: ActivatedTutorial) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      let routeData = <TutorialRouteData>data;
      this.tutorial = <TutorialDefinition>routeData.tutorialObject;
      this.step = <TutorialStep>routeData.stepObject;
      this.currentTutorial.updateCurrentTutorial(this.tutorial);
      this.currentTutorial.updateCurrentStep(this.step);
      let htmlContent = data.resolveData.step;

      @Component({
        selector: 'tutorial-container',
        template: htmlContent
      })
      class DynamicComponent { }

      @NgModule({
        imports: [CommonModule],
        declarations: [DynamicComponent, DiffBoxComponent]
      })
      class DynamicModule { }

      this.compiler.compileModuleAndAllComponentsAsync(DynamicModule).then(({componentFactories}) => {
         const compFactory = componentFactories.find(x => x.componentType === DynamicComponent);
         const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
         this.viewContainerRef.createComponent(compFactory, 0, injector, []);
      });
    });
  }
}
