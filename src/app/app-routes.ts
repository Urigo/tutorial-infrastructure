import {TUTORIALS_ROUTES} from './tutorials/tutorials';
import {APIS_ROUTES} from './api-reference/apis';
import {Angular2PageComponent} from './website/angular2-page/angular2-page.component';
import {ManifestoPageComponent} from './website/manifesto-page/manifesto-page.component';
import {AboutPageComponent} from './website/about-page/about-page.component';
import {MainComponent} from './website/main-page/main.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';

export const APP_ROUTES = [].concat(
  TUTORIALS_ROUTES,
  APIS_ROUTES,
  [
    {path: 'angular2', component: Angular2PageComponent},
    {path: 'manifesto', component: ManifestoPageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: '**', component: MainComponent}
  ]
);

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
