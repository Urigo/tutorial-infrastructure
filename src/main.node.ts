// the polyfills must be the first thing imported in node.js
// import 'angular2-universal/polyfills'; // polyfills are moved to server.ts


// Angular 2 Universal
import {
  REQUEST_URL,
  ORIGIN_URL,
  NODE_LOCATION_PROVIDERS,
  NODE_HTTP_PROVIDERS,
  ExpressEngineConfig
} from 'angular2-universal';

import { provideRouter } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

// Application
import {AppComponent} from './app/app.component';
import {APP_ROUTES} from "./app/tutorials/tutorials";
import {TUTORIALS_PROVIDERS} from "./app/core/tutorials-providers";

export function ngApp(req, res) {
  let baseUrl = '/';
  let url = req.originalUrl || '/';

  let config: ExpressEngineConfig = {
    directives: [
      AppComponent
    ],
    platformProviders: [
      {provide: ORIGIN_URL, useValue: 'http://localhost:3000'},
      {provide: APP_BASE_HREF, useValue: baseUrl},
    ],
    providers: [
      TUTORIALS_PROVIDERS,
      {provide: REQUEST_URL, useValue: url},
      NODE_HTTP_PROVIDERS,
      provideRouter(APP_ROUTES),
      NODE_LOCATION_PROVIDERS
    ],
    async: true,
    preboot: false // { appRoot: 'app' } // your top level app component selector
  };

  res.render('index', config);
}
