import {TutorialDefinition} from "../core/tutorial-definition";

export const ANGULAR1_WHATSAPP_IONIC_CLI: TutorialDefinition = {
  id: "ionic-tutorial",
  name: "WhatsApp clone with Angular 1 and Ionic CLI",
  gitHub: "DAB0mB/ionic-meteor-whatsapp",
  patchFile: "/assets/patches/angular1-whatsapp-ionic-cli.multi.patch",
  baseRoute: "ionic",
  steps: [
    {
      url: "/bootstrapping",
      name: "Bootstrapping",
      template: "/assets/templates/angular1-whatsapp-ionic-cli/tutorials.whatsapp.ionic.step_00.md"
    },
    {
      url: "/bundling",
      name: "Bundling",
      template: "/assets/templates/angular1-whatsapp-ionic-cli/tutorials.whatsapp.ionic.step_01.md"
    },
    {
      url: "/layout",
      name: "Layout, coding style & structure",
      template: "/assets/templates/angular1-whatsapp-ionic-cli/tutorials.whatsapp.ionic.step_02.md"
    },
    {
      url: "/realtime-meteor-server",
      name: "Realtime Meteor server",
      template: "/assets/templates/angular1-whatsapp-ionic-cli/tutorials.whatsapp.ionic.step_03.md"
    },
    {
      url: "/meteor-server-methods",
      name: "Chat view and send messages",
      template: "/assets/templates/angular1-whatsapp-ionic-cli/tutorials.whatsapp.ionic.step_04.md"
    },
    {
      url: "/authentication",
      name: "Authentication",
      template: "/assets/templates/angular1-whatsapp-ionic-cli/tutorials.whatsapp.ionic.step_05.md"
    },
    {
      url: "/modify-chats",
      name: "Create and remove chats",
      template: "/assets/templates/angular1-whatsapp-ionic-cli/tutorials.whatsapp.ionic.step_06.md"
    },
    {
      url: "/privacy",
      name: "Privacy",
      template: "/assets/templates/angular1-whatsapp-ionic-cli/tutorials.whatsapp.ionic.step_07.md"
    },
    {
      url: "/summary",
      name: "Summary",
      template: "/assets/templates/angular1-whatsapp-ionic-cli/tutorials.whatsapp.ionic.step_08.md"
    }
  ]
};
