import { Route } from '@angular/router';
import { TutorialDefinition, TutorialStep } from './tutorial-definition';
import { TutorialPage } from './tutorial-page.component';
import { PatchLoadResolve } from './patch-load-resolver';

export interface TutorialRouteData {
  stepObject: TutorialStep;
  tutorialObject: TutorialDefinition;
  gitTagRevision: string;
  steps: TutorialStep[];
}

export function createTutorialsRoutes(tutorialsArray: Array<TutorialDefinition>) {
  let config = [];

  tutorialsArray.forEach((tutorial: TutorialDefinition) => {
    const baseUrl = tutorial.baseRoute;

    Object.keys(tutorial.versions).forEach((tutorialGitIdentifier: string) => {
      const versionData = tutorial.versions[tutorialGitIdentifier];
      const steps = versionData.steps;
      const isLatest = versionData.isLatest;
      const routeName = versionData.urlName;

      steps.forEach((step: TutorialStep) => {
        let stepUrl;

        if (isLatest) {
          stepUrl = baseUrl + step.url;
        } else {
          stepUrl = baseUrl + '/' + routeName + step.url;
        }

        config.push(<Route>{
          path: stepUrl,
          component: TutorialPage,
          resolve: {
            resolveData: PatchLoadResolve
          },
          data: <TutorialRouteData>{
            stepObject: step,
            tutorialObject: tutorial,
            steps: steps,
            gitTagRevision: tutorialGitIdentifier
          }
        });
      });
    });
  });

  return config;
}
