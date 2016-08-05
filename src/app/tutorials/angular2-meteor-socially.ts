import {TutorialDefinition} from "../core/tutorial-definition";

export const Angular2MeteorSociallyTutorial : TutorialDefinition = {
  id: "angular2-meteor-socially",
  name: "Angular 2 Socially",
  gitHub: "Urigo/meteor-angular2.0-socially",
  patchFile: "/assets/patches/meteor-angular2-socially.multi.patch",
  baseRoute: "tutorials/angular2/socially",
  steps: [
    {
      url: "/bootstrap",
      name: "Bootstrap",
      template: "/assets/templates/angular2-meteor-socially/step_00.md"
    }
  ]
};