import {Injectable} from "@angular/core";
import {TutorialRegistryCache} from "./tutorials-registry-cache";
import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {StepsTemplatesCache} from "./steps-templates-cache";
import {TutorialRouteData} from "./tutorial-routes";

@Injectable()
export class PatchLoadResolve implements Resolve {
  constructor(private cache: TutorialRegistryCache,
              private templatesCache: StepsTemplatesCache) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let data: TutorialRouteData = <TutorialRouteData>route.data;

    let tutorialPatchObservable = this.cache.load(
      data.tutorialObject.id,
      data.tutorialObject).map(res => true);

    let stepHtmlObservable = this.templatesCache.load(
      data.stepObject.name,
      data.tutorialObject.id,
      data.stepObject.template);

    return tutorialPatchObservable.concat(stepHtmlObservable).map(() => true);
  }
}
