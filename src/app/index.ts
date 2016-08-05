import {createTutorialsRoutes} from "./core/tutorial-routes";
import {provideRouter} from "@angular/router";
import {MainComponent} from "./website/main-page/main.component";
import {provide} from "@angular/core";
import {ALL_TUTORIALS} from "./tutorials/tutorials";
import {TUTORIALS_PROVIDERS} from "./core/tutorials-providers";

export const APP_PROVIDERS = [
  TUTORIALS_PROVIDERS,
  provideRouter(createTutorialsRoutes(ALL_TUTORIALS).concat([
    {path: "**", component: MainComponent}
  ]))
];