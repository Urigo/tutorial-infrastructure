import {TutorialDefinition} from "../core/tutorial-definition";

export const ANGULAR2_METEOR_SOCIALLY : TutorialDefinition = {
  id: "angular2-meteor-socially",
  name: "Angular 2 Socially",
  gitHub: "Urigo/meteor-angular2.0-socially",
  patchFile: "/assets/patches/meteor-angular2-socially.multi.patch",
  baseRoute: "angular2/socially",
  steps: [
    {
      url: "/bootstrap",
      name: "Bootstrap",
      template: "/assets/templates/angular2-meteor-socially/step_00.md"
    },
    {
      url: "/static-template",
      name: "Static Templates",
      template: "/assets/templates/angular2-meteor-socially/step_01.md"
    },
    {
      url: "/dynamic-template",
      name: "Dynamic Templates",
      template: "/assets/templates/angular2-meteor-socially/step_02.md"
    }
  ]
};
