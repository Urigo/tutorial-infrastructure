import {Resolve, RouterConfig, Route, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {TutorialDefinition, TutorialStep} from "./tutorial-definition";
import {TutorialPage} from "./tutorial-page.component";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {PatchLoadResolve} from "./patch-load-resolver";

export interface TutorialRouteData {
  stepObject:TutorialStep;
  tutorialObject:TutorialDefinition;
}

export function createTutorialsRoutes(tutorialsArray : Array<TutorialDefinition>) {
  let config = [];

  tutorialsArray.forEach((tutorial : TutorialDefinition) => {
    const baseUrl = tutorial.baseRoute;

    tutorial.steps.forEach((step: TutorialStep) => {
      let stepUrl = baseUrl + step.url;

      config.push(<Route>{
        path: stepUrl,
        component: TutorialPage,
        resolve: [PatchLoadResolve],
        data: <TutorialRouteData>{
          stepObject: step,
          tutorialObject: tutorial
        }
      })
    });
  });

  return config;
}