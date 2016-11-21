import {TUTORIALS_ROUTES} from './tutorials/tutorials';
import {APIS_ROUTES} from './api-reference/apis';
import {ManifestoPageComponent} from './website/manifesto-page/manifesto-page.component';
import {MainComponent} from './website/main-page/main.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MeteorRxJsPage} from "./website/meteor-rxjs/meteor-rxjs.component";
import {ConsultingPage} from "./website/support-pages/consulting.component";
import {SupportPage} from "./website/support-pages/support.component";
import {TrainingPage} from "./website/support-pages/training.component";

export const APP_ROUTES: Routes = [].concat(
  TUTORIALS_ROUTES,
  APIS_ROUTES,
  [
    {path: 'meteor-rxjs', component: MeteorRxJsPage},
    {path: 'manifesto', component: ManifestoPageComponent},
    {path: 'consulting', component: ConsultingPage},
    {path: 'support', component: SupportPage},
    {path: 'training', component: TrainingPage},
    {path: '**', component: MainComponent}
  ]
);

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
