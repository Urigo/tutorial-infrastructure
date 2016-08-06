import {provideRouter} from "@angular/router";
import {APP_ROUTES} from "./tutorials/tutorials";
import {TUTORIALS_PROVIDERS} from "./core/tutorials-providers";

export const APP_PROVIDERS = [
  TUTORIALS_PROVIDERS,
  provideRouter(APP_ROUTES)
];
