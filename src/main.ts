import {bootstrap} from '@angular/platform-browser-dynamic';
import {APP_PROVIDERS} from "./app/index";
import {AppComponent} from "./app/app.component";
import { HTTP_PROVIDERS } from '@angular/http';


bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ...APP_PROVIDERS
]);