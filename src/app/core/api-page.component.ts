import {Component, OnInit, NgModule, Injectable, ViewContainerRef, ReflectiveInjector, Compiler} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivatedApi} from './current-api';
import {DummyModule} from "./dynamic-base-module";
import {PageTitleService} from "./page-title.service";

@Component({
  selector: 'api-page',
  template: ``
})
@Injectable()
export class ApiPageComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private viewContainerRef: ViewContainerRef,
              private compiler: Compiler,
              private activated: ActivatedApi,
              private router: Router,
              private seo: PageTitleService) {
  }

  fixLinks(content, urlPrefix) {
    return content.replace(/href="(#.*?)"/g, (match, group) => {
      return 'href="' + urlPrefix + group + '"';
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.activated.updateCurrentApi(data);

      const content = this.fixLinks(data.resolveData.jsDoc, this.router.url);

      this.seo.setSeoDescription(content);
      this.seo.addKeywords([
        "api",
        "api-docs",
        "reference",
        "usage",
        ...(data.apiFile.apiTitle || data.apiFile.name || " ").split(" ") || []
      ]);

      @Component({
        selector: 'tutorial-container',
        template: content
      })
      class DynamicComponent {
      }

      @NgModule({
        imports: [DummyModule],
        declarations: [DynamicComponent]
      })
      class DynamicModule {
      }

      let factories = this.compiler.compileModuleAndAllComponentsSync(DynamicModule);
      const compFactory = factories.componentFactories.find(x => x.componentType === DynamicComponent);
      const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
      this.viewContainerRef.createComponent(compFactory, 0, injector, []);
    });
  }
}
