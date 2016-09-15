import { TutorialsCoreModule } from './app/core/tutorials-module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './app/app.component.ts';
import { routing, appRoutingProviders } from './app/app-routes.ts';
import {APP_DECLARAIONS} from './app/app-declarations.ts';

export function main(config) {
  @NgModule({
    bootstrap: [AppComponent],
    declarations: APP_DECLARAIONS,
    imports: [
      //CommonModule,
      UniversalModule.withConfig({
        document: config.document,
        originUrl: 'http://localhost:3000',
        baseUrl: '/',
        requestUrl: '/',
        preboot: false
      }),
      FormsModule,
      routing,
      TutorialsCoreModule
    ],
    providers: [
      appRoutingProviders
    ]
  })
  class MainModule { }

  return MainModule;
}
