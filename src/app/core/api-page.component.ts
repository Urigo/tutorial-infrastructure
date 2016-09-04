import {Component, OnInit, Injectable, DynamicComponentLoader, ViewContainerRef} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivatedApi} from "./current-api";
import {ApiExampleCodeHighlightDirective} from "./api-example-code-highligh.directive";

function generateDynamicComponent(template = "Oops, API template is not available") {
  @Component({
    selector: "api-ref-container",
    template,
    directives: [ApiExampleCodeHighlightDirective]
  })
  class DynamicComponent {
  }

  return DynamicComponent;
}

@Component({
  selector: "api-page",
  template: `<div class="api-container" #dynamic></div>`
})
@Injectable()
export class ApiPageComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private dynamicComponentLoader: DynamicComponentLoader,
              private viewContainerRef: ViewContainerRef,
              private router: Router,
              private activated: ActivatedApi) {
  }

  private fixLinks(content, urlPrefix) {
    return content.replace(/href="(#.*?)"/g, `href="${urlPrefix}$1"`);
  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.activated.updateCurrentApi(data);

      this.dynamicComponentLoader.loadNextToLocation(
        generateDynamicComponent(this.fixLinks(data.resolveData.jsDoc, this.router.url)),
        this.viewContainerRef);
    });
  }
}