import {TutorialDefinition} from '../core/tutorial-definition';

const markdownUrlBase = 'https://raw.githubusercontent.com/Urigo/meteor-angular-socially/master/manuals/';

export const ANGULAR1_METEOR_SOCIALLY : TutorialDefinition = {
  id: 'angular1-meteor-socially',
  name: 'Angular-Meteor - Socially',
  gitHub: 'Urigo/meteor-angular-socially',
  patchFile: markdownUrlBase + 'meteor-angular-socially.multi.patch',
  baseRoute: 'angular1',
  steps: [
    {
      url: '/bootstrap',
      name: 'Bootstrap',
      template: markdownUrlBase + 'templates/step0.md',
      hideCodeDiff: true,
      youtubeVideoId: 's2RWlIrkCaE'
    },
    {
      url: '/static-template',
      name: 'Static Templates',
      template: markdownUrlBase + 'templates/step1.md',
      youtubeVideoId: 'xUod-yoDfEE'
    },
    {
      url: '/dynamic-template',
      name: 'Dynamic Templates',
      template: markdownUrlBase + 'templates/step2.md',
      youtubeVideoId: 'xUod-yoDfEE'
    },
    {
      url: '/3-way-data-binding',
      name: '3-way Data Binding',
      template: markdownUrlBase + 'templates/step3.md',
      youtubeVideoId: 'xUod-yoDfEE'
    },
    {
      url: '/adding-removing-objects-and-angular-event-handling',
      name: 'Data Management',
      template: markdownUrlBase + 'templates/step4.md',
      youtubeVideoId: 'ijKsWglJI0k'
    },
    {
      url: '/routing-and-multiple-views',
      name: 'Routing & Multiple Views',
      template: markdownUrlBase + 'templates/step5.md',
      youtubeVideoId: 'oScHP7Vd7as'
    },
    {
      url: '/bindings',
      name: 'Bindings',
      template: markdownUrlBase + 'templates/step6.md',
      youtubeVideoId: 'kRen9GlR3K8'
    },
    {
      url: '/folder-structure',
      name: 'Folder Structure',
      template: markdownUrlBase + 'templates/step7.md',
      youtubeVideoId: 'l3nTv4GuJrY'
    },
    {
      url: '/users-and-authentication',
      name: 'Users & Authentication',
      template: markdownUrlBase + 'templates/step8.md',
      youtubeVideoId: 'PgS-IAMn9Ig'
    },
    {
      url: '/privacy-and-publish-subscribe-functions',
      name: 'Privacy & Subscriptions',
      template: markdownUrlBase + 'templates/step9.md',
      youtubeVideoId: 'wAHi7ilDHko'
    },
    {
      url: '/deploying-your-app',
      name: 'Deployment',
      template: markdownUrlBase + 'templates/step10.md',
      youtubeVideoId: '2WnZBKv9H9o'
    },
    {
      url: '/running-your-app-on-android-or-ios-with-phonegap',
      name: 'Mobile Support',
      template: markdownUrlBase + 'templates/step11.md',
      youtubeVideoId: '5vZOI2fi13U'
    },
    {
      url: '/search-sort-pagination-and-reactive-vars',
      name: 'Filter and Pagination',
      template: markdownUrlBase + 'templates/step12.md',
      youtubeVideoId: '8XQI2XpyH18'
    },
    {
      url: '/using-and-creating-angularjs-pipes',
      name: 'AngularJS Pipes',
      template: markdownUrlBase + 'templates/step13.md',
      youtubeVideoId: 'S049FI8TP4A'
    },
    {
      url: '/meteor-methods',
      name: 'Meteor Methods',
      template: markdownUrlBase + 'templates/step14.md',
      youtubeVideoId: 'qNUjZjfaYt8'
    },
    {
      url: '/conditional-template-directives-with-angularjs',
      name: 'Conditional Templates',
      template: markdownUrlBase + 'templates/step15.md',
      youtubeVideoId: 'KSlVThsNCss'
    },
    {
      url: '/google-maps',
      name: 'Google Maps',
      template: markdownUrlBase + 'templates/step16.md',
      youtubeVideoId: 'A6qsm_RDc9Y'
    },
    {
      url: '/css-less-and-bootstrap',
      name: 'CSS, LESS and Bootstrap',
      template: markdownUrlBase + 'templates/step17.md',
      youtubeVideoId: 'A6qsm_RDc9Y'
    },
    {
      url: '/angular-material-and-custom-angular-auth-forms',
      name: 'Angular2-Material & Custom Auth',
      template: markdownUrlBase + 'templates/step18.md',
      youtubeVideoId: 'A6qsm_RDc9Y'
    },
    {
      url: '/3rd-party-libraries',
      name: 'Third-Party Libraries',
      template: markdownUrlBase + 'templates/step19.md'
    },
    {
      url: '/files-and-uploadfs',
      name: 'Files and UploadFS',
      template: markdownUrlBase + 'templates/step20.md'
    },
    {
      url: '/packages-isolation',
      name: 'Packages Isolation',
      template: markdownUrlBase + 'templates/step21.md'
    },
    {
      url: '/ionic',
      name: 'Ionic',
      template: markdownUrlBase + 'templates/step22.md'
    },
    {
      url: '/ngupgrade-and-migration',
      name: 'ngUpgrade & Migration',
      template: markdownUrlBase + 'templates/step23.md',
      youtubeVideoId: '3mtgDq4sB8Y'
    },
    {
      url: '/next-steps',
      name: 'Next Steps',
      template: markdownUrlBase + 'templates/step24.md',
      hideCodeDiff: true
    }
  ]
};
