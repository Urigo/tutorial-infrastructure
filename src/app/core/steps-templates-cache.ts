import {Observable} from "rxjs";
import * as marked from "marked";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class StepsTemplatesCache {
  private cache : Map<string, string>;

  constructor(private http:Http) {
    this.cache = new Map<string, string>();
  }

  private set(id:string, content:string) {
    this.cache.set(id, content);
  }

  public buildId(step: string, tutorialId:string): string {
    return tutorialId + "_" + step;
  }

  public getHtml(step:string, tutorialId:string) {
    return this.cache.get(this.buildId(step, tutorialId));
  }

  public load(step:string, tutorialId:string, fallbackUrl?:string) : Observable<any> {
    let id = this.buildId(step, tutorialId);

    if (this.cache.has(id)) {
      return Observable.of(this.cache.get(id));
    }
    else {
      let obs = this.http
        .get(fallbackUrl)
        .map(res => res.text())
        .map(text => marked(text));

      obs.subscribe((content: string) => {
        this.set(id, content);
      });

      return obs;
    }
  }
}