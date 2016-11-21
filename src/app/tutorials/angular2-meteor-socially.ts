import {TutorialDefinition} from '../core/tutorial-definition';

const markdownUrlBase = 'https://raw.githubusercontent.com/Urigo/meteor-angular2.0-socially/master/manuals/';

export const ANGULAR2_METEOR_SOCIALLY : TutorialDefinition = {
  id: 'angular2-meteor-socially',
  name: 'Angular 2 Socially',
  gitHub: 'Urigo/meteor-angular2.0-socially',
  patchFile: markdownUrlBase + 'meteor-angular2-socially.multi.patch',
  baseRoute: 'angular2',
  steps: [
    {
      url: '/bootstrap',
      name: 'Bootstrap',
      template: markdownUrlBase + 'templates/step1.md',
      hideCodeDiff: true
    },
    {
      url: '/static-template',
      name: 'Static Templates',
      template: markdownUrlBase + 'templates/step2.md'
    },
    {
      url: '/dynamic-template',
      name: 'Dynamic Templates',
      template: markdownUrlBase + 'templates/step3.md'
    },
    {
      url: '/3-way-data-binding',
      name: '3-way Data Binding',
      template: markdownUrlBase + 'templates/step4.md'
    },
    {
      url: '/adding-removing-objects-and-angular-event-handling',
      name: 'Data Management',
      template: markdownUrlBase + 'templates/step5.md',
      youtubeVideoId: 'YyDK-JiTGX8'
    },
    {
      url: '/routing-and-multiple-views',
      name: 'Routing & Multiple Views',
      template: markdownUrlBase + 'templates/step6.md',
      youtubeVideoId: 'CsXum7TFg14'
    },
    {
      url: '/bindings',
      name: 'Bindings',
      template: markdownUrlBase + 'templates/step7.md',
      youtubeVideoId: 'khZjQu121io'
    },
    {
      url: '/folder-structure',
      name: 'Folder Structure',
      template: markdownUrlBase + 'templates/step8.md'
    },
    {
      url: '/users-and-authentication',
      name: 'Users & Authentication',
      template: markdownUrlBase + 'templates/step9.md',
      youtubeVideoId: 'WnHz6yQqWnA'
    },
    {
      url: '/privacy-and-publish-subscribe-functions',
      name: 'Privacy & Subscriptions',
      template: markdownUrlBase + 'templates/step10.md',
      youtubeVideoId: '-L9a3BJ13Bk'
    },
    {
      url: '/deploying-your-app',
      name: 'Deployment',
      template: markdownUrlBase + 'templates/step11.md'
    },
    {
      url: '/running-your-app-on-android-or-ios-with-phonegap',
      name: 'Mobile Support',
      template: markdownUrlBase + 'templates/step12.md'
    },
    {
      url: '/search-sort-pagination-and-reactive-vars',
      name: 'Filter and Pagination',
      template: markdownUrlBase + 'templates/step13.md',
      youtubeVideoId: 'fejKFYDN4k4'
    },
    {
      url: '/using-and-creating-angularjs-pipes',
      name: 'AngularJS Pipes',
      template: markdownUrlBase + 'templates/step14.md',
      youtubeVideoId: 'l_emU5OYpkk'
    },
    {
      url: '/meteor-methods',
      name: 'Meteor Methods',
      template: markdownUrlBase + 'templates/step15.md',
      youtubeVideoId: 'M-8Vn2r6eYw'
    },
    {
      url: '/conditional-template-directives-with-angularjs',
      name: 'Conditional Templates',
      template: markdownUrlBase + 'templates/step16.md',
      youtubeVideoId: 'f0IPUP-mIyA'
    },
    {
      url: '/google-maps',
      name: 'Google Maps',
      template: markdownUrlBase + 'templates/step17.md',
      youtubeVideoId: 'qPqdtzimF0k'
    },
    {
      url: '/css-sass-and-bootstrap',
      name: 'CSS, SASS and Bootstrap',
      template: markdownUrlBase + 'templates/step18.md',
      youtubeVideoId: 'D7Zo2jOx11M'
    },
    {
      url: '/angular-material-and-custom-angular-auth-forms',
      name: 'Angular2-Material & Custom Auth',
      template: markdownUrlBase + 'templates/step19.md',
      youtubeVideoId: '8m44bliJF1M'
    },
    {
      url: '/3rd-party-libraries',
      name: 'Third-Party Libraries',
      template: markdownUrlBase + 'templates/step20.md'
    },
    {
      url: '/files-and-uploadfs',
      name: 'Files and UploadFS',
      template: markdownUrlBase + 'templates/step21.md'
    },
    {
      url: '/packages-isolation',
      name: 'Packages Isolation',
      template: markdownUrlBase + 'templates/step22.md'
    },
    {
      url: '/ionic2',
      name: 'Ionic2',
      template: markdownUrlBase + 'templates/step23.md'
    },
    {
      url: '/ngupgrade-and-migration',
      name: 'ngUpgrade & Migration',
      template: markdownUrlBase + 'templates/step24.md',
      noZipDownload: true,
      hideCodeDiff: true
    },
    {
      url: '/next-steps',
      name: 'Next Steps',
      template: markdownUrlBase + 'templates/step25.md',
      hideCodeDiff: true,
      noZipDownload: true
    }
  ]
};
