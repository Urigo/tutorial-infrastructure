import {ANGULAR2_METEOR_SOCIALLY} from "./angular2-meteor-socially";
import {createTutorialsRoutes} from "../core/tutorial-routes";
import {MainComponent} from "../website/main-page/main.component";
import {TutorialsContainer} from "../website/tutorials-container/tutorials-container.component";
import {ANGULAR1_METEOR_SOCIALLY} from "./angular-meteor-socially";

export const ALL_TUTORIALS = [
  ANGULAR2_METEOR_SOCIALLY,
  ANGULAR1_METEOR_SOCIALLY
];

export const APP_ROUTES = [
  {path: "tutorials", component: TutorialsContainer, children: createTutorialsRoutes(ALL_TUTORIALS)},
  {path: "**", component: MainComponent}
];
