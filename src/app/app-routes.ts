import {TUTORIALS_ROUTES} from './tutorials/tutorials';
import {APIS_ROUTES} from './api-reference/apis';
import {ManifestoPageComponent} from './website/manifesto-page/manifesto-page.component';
import {AboutPageComponent} from './website/about-page/about-page.component';
import {MainComponent} from './website/main-page/main.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MeteorRxJsPage} from "./website/meteor-rxjs/meteor-rxjs.component";

export const APP_ROUTES: Routes = [].concat(
  TUTORIALS_ROUTES,
  APIS_ROUTES,
  [
    {path: 'meteor-rxjs', component: MeteorRxJsPage},
    {path: 'manifesto', component: ManifestoPageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: '**', component: MainComponent}
  ]
);

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
