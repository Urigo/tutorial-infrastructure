import {TutorialDefinition} from '../core/tutorial-definition';

const markdownUrlBase = 'https://raw.githubusercontent.com/Urigo/meteor-angular2.0-socially/master/manuals/templates/';

export const ANGULAR2_METEOR_SOCIALLY : TutorialDefinition = {
  id: 'angular2-meteor-socially',
  name: 'Angular 2 Socially',
  gitHub: 'Urigo/meteor-angular2.0-socially',
  patchFile: '/assets/patches/meteor-angular2-socially.multi.patch',
  baseRoute: 'angular2',
  steps: [
    {
      url: '/bootstrap',
      name: 'Bootstrap',
      template: markdownUrlBase + 'step1.md',
      hideCodeDiff: true
    },
    {
      url: '/static-template',
      name: 'Static Templates',
      template: markdownUrlBase + 'step2.md'
    },
    {
      url: '/dynamic-template',
      name: 'Dynamic Templates',
      template: markdownUrlBase + 'step3.md'
    },
    {
      url: '/3-way-data-binding',
      name: '3-way Data Binding',
      template: markdownUrlBase + 'step4.md'
    },
    {
      url: '/adding-removing-objects-and-angular-event-handling',
      name: 'Data Management',
      template: markdownUrlBase + 'step5.md'
    },
    {
      url: '/routing-and-multiple-views',
      name: 'Routing & Multiple Views',
      template: markdownUrlBase + 'step6.md'
    },
    {
      url: '/bindings',
      name: 'Bindings',
      template: markdownUrlBase + 'step7.md'
    },
    {
      url: '/folder-structure',
      name: 'Folder Structure',
      template: markdownUrlBase + 'step8.md'
    },
    {
      url: '/users-and-authentication',
      name: 'Users & Authentication',
      template: markdownUrlBase + 'step9.md'
    },
    {
      url: '/privacy-and-publish-subscribe-functions',
      name: 'Privacy & Subscriptions',
      template: markdownUrlBase + 'step10.md'
    },
    {
      url: '/deploying-your-app',
      name: 'Deployment',
      template: markdownUrlBase + 'step11.md'
    },
    {
      url: '/running-your-app-on-android-or-ios-with-phonegap',
      name: 'Mobile Support',
      template: markdownUrlBase + 'step12.md'
    },
    {
      url: '/search-sort-pagination-and-reactive-vars',
      name: 'Filter and Pagination',
      template: markdownUrlBase + 'step13.md'
    },
    {
      url: '/using-and-creating-angularjs-pipes',
      name: 'AngularJS Pipes',
      template: markdownUrlBase + 'step14.md'
    },
    {
      url: '/meteor-methods',
      name: 'Meteor Methods',
      template: markdownUrlBase + 'step15.md'
    },
    {
      url: '/conditional-template-directives-with-angularjs',
      name: 'Conditional Templates',
      template: markdownUrlBase + 'step16.md'
    },
    {
      url: '/google-maps',
      name: 'Google Maps',
      template: markdownUrlBase + 'step17.md'
    },
    {
      url: '/css-sass-and-bootstrap',
      name: 'CSS, SASS and Bootstrap',
      template: markdownUrlBase + 'step18.md'
    },
    {
      url: '/angular-material-and-custom-angular-auth-forms',
      name: 'Angular2-Material & Custom Auth',
      template: markdownUrlBase + 'step19.md'
    },
    {
      url: '/3rd-party-libraries',
      name: 'Third-Party Libraries',
      template: markdownUrlBase + 'step20.md'
    },
    {
      url: '/files-and-uploadfs',
      name: 'Files and UploadFS',
      template: markdownUrlBase + 'step21.md'
    },
    {
      url: '/packages-isolation',
      name: 'Packages Isolation',
      template: markdownUrlBase + 'step22.md'
    },
    {
      url: '/ionic2',
      name: 'Ionic2',
      template: markdownUrlBase + 'step23.md'
    },
    {
      url: '/ngupgrade-and-migration',
      name: 'ngUpgrade & Migration',
      template: markdownUrlBase + 'step24.md'
    },
    {
      url: '/next-steps',
      name: 'Next Steps',
      template: markdownUrlBase + 'step25.md',
      hideCodeDiff: true
    }
  ]
};
