import {TutorialDefinition} from '../core/tutorial-definition';

export const ANGULAR1_WHATSAPP_METEOR_CLI: TutorialDefinition = {
  id: 'whatsapp-meteor-tutorial',
  name: 'WhatsApp clone with Angular 1 and Meteor CLI',
  gitHub: 'DAB0mB/angular-meteor-whatsapp',
  patchFile: '/assets/patches/angular1-whatsapp-meteor-cli.multi.patch',
  baseRoute: 'meteor',
  steps: [
    {
      url: '/bootstrapping',
      name: 'Bootstrapping',
      template: '/assets/templates/angular1-whatsapp-meteor-cli/tutorials.whatsapp.meteor.step_00.md'
    },
    {
      url: '/layout',
      name: 'Layout, coding style & structure',
      template: '/assets/templates/angular1-whatsapp-meteor-cli/tutorials.whatsapp.meteor.step_01.md'
    },
    {
      url: '/realtime-meteor-server',
      name: 'Realtime Meteor server',
      template: '/assets/templates/angular1-whatsapp-meteor-cli/tutorials.whatsapp.meteor.step_02.md'
    },
    {
      url: '/meteor-server-methods',
      name: 'Chat view and send messages',
      template: '/assets/templates/angular1-whatsapp-meteor-cli/tutorials.whatsapp.meteor.step_03.md'
    },
    {
      url: '/authentication',
      name: 'Authentication',
      template: '/assets/templates/angular1-whatsapp-meteor-cli/tutorials.whatsapp.meteor.step_04.md'
    },
    {
      url: '/modify-chats',
      name: 'Create and remove chats',
      template: '/assets/templates/angular1-whatsapp-meteor-cli/tutorials.whatsapp.meteor.step_05.md'
    },
    {
      url: '/privacy',
      name: 'Privacy',
      template: '/assets/templates/angular1-whatsapp-meteor-cli/tutorials.whatsapp.meteor.step_06.md'
    },
    {
      url: '/user-profile-picture',
      name: 'User profile picture',
      template: '/assets/templates/angular1-whatsapp-meteor-cli/tutorials.whatsapp.meteor.step_07.md'
    },
    {
      url: '/image-upload',
      name: 'Send image messages',
      template: '/assets/templates/angular1-whatsapp-meteor-cli/tutorials.whatsapp.meteor.step_08.md'
    },
    {
      url: '/summary',
      name: 'Summary',
      template: '/assets/templates/angular1-whatsapp-meteor-cli/tutorials.whatsapp.meteor.step_09.md'
    }
  ]
};
