import {TutorialDefinition} from '../core/tutorial-definition';

export const ANGULAR2_WHATSAPP_IONIC_CLI: TutorialDefinition = {
  id: 'whatsapp2-ionic-tutorial',
  name: 'WhatsApp clone with Angular 2 and Ionic CLI',
  gitHub: 'DAB0mB/ionic2-meteor-messenger',
  patchFile: '/assets/patches/angular2-whatsapp-ionic-cli.multi.patch',
  baseRoute: 'ionic',
  steps: [
    {
      url: '/setup',
      name: 'Initial setup',
      template: '/assets/templates/angular2-whatsapp-ionic-cli/tutorials.whatsapp2.ionic.step_01.md'
    },
    {
      url: '/chats-page',
      name: 'Chats page',
      template: '/assets/templates/angular2-whatsapp-ionic-cli/tutorials.whatsapp2.ionic.step_02.md'
    },
    {
      url: '/meteor-server-side',
      name: 'Realtime Meteor Server',
      template: '/assets/templates/angular2-whatsapp-ionic-cli/tutorials.whatsapp2.ionic.step_03.md'
    },
    {
      url: '/messages-page',
      name: 'Messages Page',
      template: '/assets/templates/angular2-whatsapp-ionic-cli/tutorials.whatsapp2.ionic.step_04.md'
    },
    {
      url: '/authentication',
      name: 'Authentication',
      template: '/assets/templates/angular2-whatsapp-ionic-cli/tutorials.whatsapp2.ionic.step_05.md'
    },
    {
      url: '/chats-mutations',
      name: 'Chats Creation & Removal',
      template: '/assets/templates/angular2-whatsapp-ionic-cli/tutorials.whatsapp2.ionic.step_06.md'
    },
    {
      url: '/privacy',
      name: 'Privacy & Security',
      template: '/assets/templates/angular2-whatsapp-ionic-cli/tutorials.whatsapp2.ionic.step_07.md'
    },
    {
      url: '/summary',
      name: 'Summary',
      template: '/assets/templates/angular2-whatsapp-ionic-cli/tutorials.whatsapp2.ionic.step_08.md'
    }
  ]
};
