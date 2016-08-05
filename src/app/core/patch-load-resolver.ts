import {Injectable} from "@angular/core";
import {TutorialRegistryCache} from "./tutorials-registry-cache";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {StepsTemplatesCache} from "./steps-templates-cache";
import {TutorialRouteData} from "./tutorial-routes";

@Injectable()
export class PatchLoadResolve implements Resolve<any> {
  constructor(private cache : TutorialRegistryCache, private templatesCache : StepsTemplatesCache) {}

  resolve(route: any):Observable<any> {
    let data : TutorialRouteData = route.data;
    let tutorialPatchObservable = this.cache.load(data.tutorialObject.id, data.tutorialObject);
    let stepHtmlObservable = this.templatesCache.load(data.stepObject.name, data.tutorialObject.id, data.stepObject.template);

    return tutorialPatchObservable.concat(stepHtmlObservable);
  }
}