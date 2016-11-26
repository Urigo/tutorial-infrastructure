import {TutorialDefinition} from '../core/tutorial-definition';

const markdownUrlBase = '/master/manuals/';

export const BLAZE_TO_ANGULAR2_MIGRATION: TutorialDefinition = {
  id: 'migration-angular2',
  name: 'Blaze to Angular 2 Migration',
  gitHub: 'dotansimha/angular2-blaze-migration-tutorial',
  baseRoute: 'angular2',
  steps: [
    {
      url: '/introduction',
      name: 'Introduction',
      template: markdownUrlBase + 'templates/step1.md',
      hideCodeDiff: true
    },
    {
      url: '/understanding-angular2',
      name: 'Understanding Angular 2',
      template: markdownUrlBase + 'templates/step2.md',
    },
    {
      url: '/first-steps',
      name: 'First Steps',
      template: markdownUrlBase + 'templates/step3.md',
    },
    {
      url: '/coexistence',
      name: 'Coexistence',
      template: markdownUrlBase + 'templates/step4.md',
    },
    {
      url: '/typescript',
      name: 'TypeScript',
      template: markdownUrlBase + 'templates/step5.md',
    },
    {
      url: '/creating-angular2-application',
      name: 'Creating Angular 2 Application',
      template: markdownUrlBase + 'templates/step6.md',
    },
    {
      url: '/router-migration',
      name: 'Router Migration',
      template: markdownUrlBase + 'templates/step7.md',
    },
    {
      url: '/main-template-migration',
      name: 'Migrate the main Blaze Template',
      template: markdownUrlBase + 'templates/step8.md',
    },
    {
      url: '/load-blaze-template',
      name: 'Load Blaze Template',
      template: markdownUrlBase + 'templates/step9.md',
    },
    {
      url: '/blaze-template-to-angular2-component',
      name: 'Migrate Template into Component',
      template: markdownUrlBase + 'templates/step10.md',
    },
    {
      url: '/authentication-migration',
      name: 'Migrating Authentication Templates',
      template: markdownUrlBase + 'templates/step11.md',
    },
    {
      url: '/todo-list-migration',
      name: 'Migrate the Todo List',
      template: markdownUrlBase + 'templates/step12.md',
    },
    {
      url: '/list-item-migration',
      name: 'Migrate the List Item',
      template: markdownUrlBase + 'templates/step13.md',
    },
    {
      url: '/cleanup',
      name: 'Cleanup',
      template: markdownUrlBase + 'templates/step14.md',
    },
    {
      url: '/next-steps',
      name: 'Next Steps',
      template: markdownUrlBase + 'templates/step15.md',
    }
  ]
};
