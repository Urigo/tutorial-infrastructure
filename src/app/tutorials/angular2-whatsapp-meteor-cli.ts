import {TutorialDefinition} from '../core/tutorial-definition';

const markdownUrlBase = 'https://raw.githubusercontent.com/Urigo/Ionic2-MeteorCLI-WhatsApp/master/manuals/';

export const ANGULAR2_WHATSAPP_METEOR_CLI: TutorialDefinition = {
  id: 'whatsapp2-meteor-tutorial',
  name: 'WhatsApp Clone with Meteor CLI and Ionic 2',
  gitHub: 'Urigo/Ionic2-MeteorCLI-WhatsApp',
  patchFile: markdownUrlBase + 'whatsapp2-meteor-cli.multi.patch',
  baseRoute: 'meteor',
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
      hideCodeDiff: true
    }
  ]
};
