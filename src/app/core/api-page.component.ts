import {Component, OnInit, NgModule, Injectable, ViewContainerRef, ReflectiveInjector, Compiler} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
              private activated: ActivatedApi) {
  }

  fixLinks(content, urlPrefix) {
    return content.replace(/href='(#.*?)'/g, `href='${urlPrefix}$1'`);
  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.activated.updateCurrentApi(data);

      @Component({
        selector: 'tutorial-container',
        template: data.resolveData.jsDoc
      })
      class DynamicComponent { }

      @NgModule({
        imports: [DummyModule],
        declarations: [DynamicComponent]
      })
      class DynamicModule { }

      let factories = this.compiler.compileModuleAndAllComponentsSync(DynamicModule);
      const compFactory = factories.componentFactories.find(x => x.componentType === DynamicComponent);
      const injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
      this.viewContainerRef.createComponent(compFactory, 0, injector, []);
    });
  }
}
