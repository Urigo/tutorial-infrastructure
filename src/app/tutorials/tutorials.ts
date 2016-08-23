import {ANGULAR2_METEOR_SOCIALLY} from "./angular2-meteor-socially";
import {createTutorialsRoutes} from "../core/tutorial-routes";
import {MainComponent} from "../website/main-page/main.component";
import {TutorialsContainer} from "../website/tutorials-container/tutorials-container.component";
import {ANGULAR1_METEOR_SOCIALLY} from "./angular-meteor-socially";
import {BLAZE_TO_ANGULAR2_MIGRATION} from "./blaze-angular2-migration";
import {Angular2PageComponent} from "../website/angular2-page/angular2-page.component";
import {ManifestoPageComponent} from "../website/manifesto-page/manifesto-page.component";
import {AboutPageComponent} from "../website/about-page/about-page.component";

export const ALL_TUTORIALS = [
  ANGULAR2_METEOR_SOCIALLY,
  ANGULAR1_METEOR_SOCIALLY,
  BLAZE_TO_ANGULAR2_MIGRATION
];

export const APP_ROUTES = [
  {path: "tutorials", component: TutorialsContainer, children: createTutorialsRoutes(ALL_TUTORIALS)},
  {path: "angular2", component: Angular2PageComponent},
  {path: "manifesto", component: ManifestoPageComponent},
  {path: "about", component: AboutPageComponent},
  {path: "**", component: MainComponent}
];
