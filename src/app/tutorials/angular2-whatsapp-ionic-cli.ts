import {TutorialDefinition} from '../core/tutorial-definition';

const markdownUrlBase = 'https://raw.githubusercontent.com/Urigo/Ionic2CLI-Meteor-WhatsApp/master/manuals/';

export const ANGULAR2_WHATSAPP_IONIC_CLI: TutorialDefinition = {
  id: 'whatsapp2-ionic-tutorial',
  name: 'WhatsApp clone with Angular 2 and Ionic CLI',
  gitHub: 'Urigo/Ionic2CLI-Meteor-WhatsApp',
  patchFile: markdownUrlBase + 'whatsapp2-ionic-cli.multi.patch',
  baseRoute: 'ionic',
  steps: [
    {
      url: '/setup',
      name: 'Initial setup',
      template: markdownUrlBase + 'templates/step1.md',
    },
    {
      url: '/chats-page',
      name: 'Chats page',
      template: markdownUrlBase + 'templates/step2.md',
    },
    {
      url: '/meteor-server-side',
      name: 'Realtime Meteor Server',
      template: markdownUrlBase + 'templates/step3.md',
    },
    {
      url: '/messages-page',
      name: 'Messages Page',
      template: markdownUrlBase + 'templates/step4.md',
    },
    {
      url: '/authentication',
      name: 'Authentication',
      template: markdownUrlBase + 'templates/step5.md',
    },
    {
      url: '/chats-mutations',
      name: 'Chats Creation & Removal',
      template: markdownUrlBase + 'templates/step6.md',
    },
    {
      url: '/privacy',
      name: 'Privacy & Security',
      template: markdownUrlBase + 'templates/step7.md',
    },
    {
      url: '/summary',
      name: 'Summary',
      template: markdownUrlBase + 'templates/step8.md',
    }
  ]
};
