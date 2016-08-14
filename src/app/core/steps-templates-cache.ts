import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
let markdown = require("markdown").markdown;

@Injectable()
export class StepsTemplatesCache {
  private cache: Map<string, string>;

  constructor(private http: Http) {
    this.cache = new Map<string, string>();
  }

  public buildId(step: string, tutorialId: string): string {
    return tutorialId + "_" + step;
  }

  public getHtml(step: string, tutorialId: string) {
    return this.cache.get(this.buildId(step, tutorialId));
  }

  private escapeAngularBindings(html: string): string {
    return html.replace(/<code/g, "<code ngNonBindable");
  }

  private unescapeDiffBox(html: string): string {
    return html.replace(/(&lt;diffbox.*?&gt;)/g, (res) => {
      return res.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"');
    }).replace(/&lt;\/diffbox&gt;/g, "</diffbox>");
  }

  public load(step: string, tutorialId: string, fallbackUrl?: string): Observable<any> {
    let id = this.buildId(step, tutorialId);

    if (this.cache.has(id)) {
      return Observable.of(this.cache.get(id));
    } else {
      let obs = this.http
        .get(fallbackUrl)
        .map(res => res.text())
        .map(text => markdown.toHTML(text))
        .map(this.escapeAngularBindings)
        .map(this.unescapeDiffBox);

      obs.subscribe((content: string) => {
        this.set(id, content);
      });

      return obs;
    }
  }

  private set(id: string, content: string) {
    this.cache.set(id, content);
  }
}
