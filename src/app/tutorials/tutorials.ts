import {ANGULAR2_METEOR_SOCIALLY} from "./angular2-meteor-socially";
import {createTutorialsRoutes} from "../core/tutorial-routes";
import {MainComponent} from "../website/main-page/main.component";

export const ALL_TUTORIALS = [
  ANGULAR2_METEOR_SOCIALLY
];

export const APP_ROUTES = createTutorialsRoutes(ALL_TUTORIALS).concat([
  {path: "**", component: MainComponent}
]);
