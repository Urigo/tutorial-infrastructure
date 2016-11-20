import { Injectable } from '@angular/core';
import { TutorialRegistryCache } from './tutorials-registry-cache';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StepsTemplatesLoader } from './steps-templates-loader';
import { TutorialRouteData } from './tutorial-routes';

@Injectable()
export class PatchLoadResolve implements Resolve<any> {
  constructor(
    private cache: TutorialRegistryCache,
    private templatesCache: StepsTemplatesLoader) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let data: TutorialRouteData = <TutorialRouteData>route.data;

    let tutorialPatchObservable = this.cache.load(data.tutorialObject.id, data.tutorialObject);
    let stepHtmlObservable = this.templatesCache.load(data.tutorialObject.id, data.stepObject.template);

    return Observable.zip(tutorialPatchObservable, stepHtmlObservable, (tutorial, step) => {
      return { tutorial, step };
    });
  }
}
