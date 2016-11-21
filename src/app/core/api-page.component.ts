import {Component, OnInit, NgModule, Injectable, ViewContainerRef, ReflectiveInjector, Compiler} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivatedApi} from './current-api';
import {DummyModule} from "./dynamic-base-module";

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
              private router: Router) {
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
