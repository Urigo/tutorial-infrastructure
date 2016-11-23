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
      hideCodeDiff: true
    },
    {
      url: '/static-template',
      name: 'Static Templates',
      template: markdownUrlBase + 'templates/step1.md'
    },
    {
      url: '/dynamic-template',
      name: 'Dynamic Templates',
      template: markdownUrlBase + 'templates/step2.md'
    },
    {
      url: '/3-way-data-binding',
      name: '3-way Data Binding',
      template: markdownUrlBase + 'templates/step3.md'
    },
    {
      url: '/adding-removing-objects-and-angular-event-handling',
      name: 'Data Management',
      template: markdownUrlBase + 'templates/step4.md'
    },
    {
      url: '/routing-and-multiple-views',
      name: 'Routing & Multiple Views',
      template: markdownUrlBase + 'templates/step5.md'
    },
    {
      url: '/bindings',
      name: 'Bindings',
      template: markdownUrlBase + 'templates/step6.md'
    },
    {
      url: '/folder-structure',
      name: 'Folder Structure',
      template: markdownUrlBase + 'templates/step7.md'
    },
    {
      url: '/users-and-authentication',
      name: 'Users & Authentication',
      template: markdownUrlBase + 'templates/step8.md'
    },
    {
      url: '/privacy-and-publish-subscribe-functions',
      name: 'Privacy & Subscriptions',
      template: markdownUrlBase + 'templates/step9.md'
    },
    {
      url: '/deploying-your-app',
      name: 'Deployment',
      template: markdownUrlBase + 'templates/step10.md'
    },
    {
      url: '/running-your-app-on-android-or-ios-with-phonegap',
      name: 'Mobile Support',
      template: markdownUrlBase + 'templates/step11.md'
    },
    {
      url: '/search-sort-pagination-and-reactive-vars',
      name: 'Filter and Pagination',
      template: markdownUrlBase + 'templates/step12.md'
    },
    {
      url: '/using-and-creating-angularjs-pipes',
      name: 'AngularJS Pipes',
      template: markdownUrlBase + 'templates/step13.md'
    },
    {
      url: '/meteor-methods',
      name: 'Meteor Methods',
      template: markdownUrlBase + 'templates/step14.md'
    },
    {
      url: '/conditional-template-directives-with-angularjs',
      name: 'Conditional Templates',
      template: markdownUrlBase + 'templates/step15.md'
    },
    {
      url: '/google-maps',
      name: 'Google Maps',
      template: markdownUrlBase + 'templates/step16.md'
    },
    {
      url: '/css-less-and-bootstrap',
      name: 'CSS, LESS and Bootstrap',
      template: markdownUrlBase + 'templates/step17.md'
    },
    {
      url: '/angular-material-and-custom-angular-auth-forms',
      name: 'Angular2-Material & Custom Auth',
      template: markdownUrlBase + 'templates/step18.md'
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
      template: markdownUrlBase + 'templates/step23.md'
    },
    {
      url: '/next-steps',
      name: 'Next Steps',
      template: markdownUrlBase + 'templates/step24.md',
      hideCodeDiff: true
    }
  ]
};
