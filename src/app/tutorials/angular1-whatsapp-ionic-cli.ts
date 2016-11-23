import {TutorialDefinition} from '../core/tutorial-definition';

const markdownUrlBase = 'https://raw.githubusercontent.com/Urigo/IonicCLI-Meteor-WhatsApp/master/manuals/';

export const ANGULAR1_WHATSAPP_IONIC_CLI: TutorialDefinition = {
  id: 'ionic-tutorial',
  name: 'WhatsApp clone with Angular 1 and Ionic CLI',
  gitHub: 'Urigo/IonicCLI-Meteor-WhatsApp',
  patchFile: markdownUrlBase + 'whatsapp1-ionic-cli.multi.patch',
  baseRoute: 'ionic',
  steps: [
    {
      url: '/bootstrapping',
      name: 'Bootstrapping',
      template: markdownUrlBase + 'templates/step0.md'
    },
    {
      url: '/bundling',
      name: 'Bundling',
      template: markdownUrlBase + 'templates/step1.md'
    },
    {
      url: '/layout',
      name: 'Layout, coding style & structure',
      template: markdownUrlBase + 'templates/step2.md'
    },
    {
      url: '/realtime-meteor-server',
      name: 'Realtime Meteor server',
      template: markdownUrlBase + 'templates/step3.md'
    },
    {
      url: '/meteor-server-methods',
      name: 'Chat view and send messages',
      template: markdownUrlBase + 'templates/step4.md'
    },
    {
      url: '/authentication',
      name: 'Authentication',
      template: markdownUrlBase + 'templates/step5.md'
    },
    {
      url: '/modify-chats',
      name: 'Create and remove chats',
      template: markdownUrlBase + 'templates/step6.md'
    },
    {
      url: '/privacy',
      name: 'Privacy',
      template: markdownUrlBase + 'templates/step7.md'
    },
    {
      url: '/summary',
      name: 'Summary',
      template: markdownUrlBase + 'templates/step8.md'
    }
  ]
};
