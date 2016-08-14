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
    },
    {
      url: "/3-way-data-binding",
      name: "3-way Data Binding",
      template: "/assets/templates/angular2-meteor-socially/step_03.md"
    },
    {
      url: "/adding-removing-objects-and-angular-event-handling",
      name: "Data Management",
      template: "/assets/templates/angular2-meteor-socially/step_04.md"
    },
    {
      url: "/routing-and-multiple-views",
      name: "Routing & Multiple Views",
      template: "/assets/templates/angular2-meteor-socially/step_05.md"
    }
  ]
};
