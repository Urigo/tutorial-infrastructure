// Angular 2 Universal
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

// Application
import {AppComponent} from './app/app.component';
import {APP_ROUTES} from "./app/tutorials/tutorials";
import {TUTORIALS_PROVIDERS} from "./app/core/tutorials-providers";

// you must return bootstrap for client.ts
export function ngApp() {
  return bootstrap(AppComponent, [
    TUTORIALS_PROVIDERS,
    ...HTTP_PROVIDERS,
    provideRouter(APP_ROUTES)
  ]);
}
