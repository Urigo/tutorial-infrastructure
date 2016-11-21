import {ApiStaticDefinition} from '../core/api-definition';

export const ANGULAR1_METEOR_API_REFERENCE : ApiStaticDefinition = {
  name: "angular-meteor",
  apiRepository: 'Urigo/angular2-meteor',
  apis: [
    {
      version: '1.3.11',
      files: [
        {
          name: 'subscribe',
          urlName: 'subscribe',
          markdownFilePath: '/assets/static-api-reference/1.3.11/api.subscribe.md'
        },
        {
          name: 'angular-templates',
          urlName: 'angular-templates',
          markdownFilePath: '/assets/static-api-reference/1.3.11/api.templates.md'
        }
      ],
      alongWith: '1.3.6'
    },
    {
      version: '1.3.6',
      files: [
        {
          name: 'helpers',
          urlName: 'helpers',
          markdownFilePath: '/assets/static-api-reference/1.3.6/api.helpers.md'
        },
        {
          name: 'subscribe',
          urlName: 'subscribe',
          markdownFilePath: '/assets/static-api-reference/1.3.6/api.subscribe.md'
        },
        {
          name: 'autorun',
          urlName: 'autorun',
          markdownFilePath: '/assets/static-api-reference/1.3.6/api.autorun.md'
        },
        {
          name: 'getReactively',
          urlName: 'get-reactively',
          markdownFilePath: '/assets/static-api-reference/1.3.6/api.get-reactively.md'
        },
        {
          name: 'call',
          urlName: 'call',
          markdownFilePath: '/assets/static-api-reference/1.3.6/api.call.md'
        },
        {
          name: 'apply',
          urlName: 'apply',
          markdownFilePath: '/assets/static-api-reference/1.3.6/api.apply.md'
        },
        {
          name: 'auth',
          urlName: 'auth',
          markdownFilePath: '/assets/static-api-reference/1.3.6/api.auth.md'
        },
        {
          name: 'ReactiveContext',
          urlName: 'reactive-context',
          markdownFilePath: '/assets/static-api-reference/1.3.6/api.reactive-context.md'
        },
        {
          name: '$reactive',
          urlName: 'reactive',
          markdownFilePath: '/assets/static-api-reference/1.3.6/api.reactive.md'
        },
        {
          name: 'blaze-template directive',
          urlName: 'blaze-template',
          markdownFilePath: '/assets/static-api-reference/1.3.6/api.blaze-template.md'
        },
        {
          name: 'File Extensions',
          urlName: 'ngFileExtension',
          markdownFilePath: '/assets/static-api-reference/1.3.6/api.ngFileExtension.md'
        },
        {
          name: '$angularMeteorSettings',
          urlName: 'settings',
          markdownFilePath: '/assets/static-api-reference/1.3.6/api.settings.md'
        },
        {
          name: 'getCollectionReactively',
          urlName: 'get-collection-reactively',
          markdownFilePath: '/assets/static-api-reference/1.3.6/api.get-collection-reactively.md'
        }
      ]
    },
    {
      version: '1.3.2',
      files: [
        {
          name: '$auth',
          urlName: 'auth',
          markdownFilePath: '/assets/static-api-reference/1.3.2/api.auth.md'
        }
      ],
      alongWith: '1.3.1'
    },
    {
      version: '1.3.1',
      files: [
        {
          name: 'helpers',
          urlName: 'helpers',
          markdownFilePath: '/assets/static-api-reference/1.3.1/api.helpers.md'
        },
        {
          name: 'subscribe',
          urlName: 'subscribe',
          markdownFilePath: '/assets/static-api-reference/1.3.1/api.subscribe.md'
        },
        {
          name: 'autorun',
          urlName: 'autorun',
          markdownFilePath: '/assets/static-api-reference/1.3.1/api.autorun.md'
        },
        {
          name: 'getReactively',
          urlName: 'get-reactively',
          markdownFilePath: '/assets/static-api-reference/1.3.1/api.get-reactively.md'
        },
        {
          name: 'ReactiveContext',
          urlName: 'reactive-context',
          markdownFilePath: '/assets/static-api-reference/1.3.1/api.reactive-context.md'
        },
        {
          name: '$reactive',
          urlName: 'reactive',
          markdownFilePath: '/assets/static-api-reference/1.3.1/api.reactive.md'
        },
        {
          name: 'blaze-template directive',
          urlName: 'blaze-template',
          markdownFilePath: '/assets/static-api-reference/1.3.1/api.blaze-template.md'
        },
        {
          name: 'File Extensions',
          urlName: 'ngFileExtension',
          markdownFilePath: '/assets/static-api-reference/1.3.1/api.ngFileExtension.md'
        }
      ]
    },
    {
      version: '1.3.0',
      files: [
        {
          name: '$reactive',
          urlName: 'reactive',
          markdownFilePath: '/assets/static-api-reference/1.3.0/api.reactive.md'
        },
        {
          name: 'ReactiveContext',
          urlName: 'reactive-context',
          markdownFilePath: '/assets/static-api-reference/1.3.0/api.reactive-context.md'
        }
      ],
      alongWith: '1.2.2'
    },
    {
      version: '1.2.2',
      files: [
        {
          name: '$meteor.collection',
          urlName: 'meteorCollection',
          markdownFilePath: '/assets/static-api-reference/1.2.2/api.meteorCollection.md',
          deprecated: '1.3.0',
          removedIn: '1.3.1'
        },
        {
          name: 'AngularMeteorCollection',
          urlName: 'AngularMeteorCollection',
          markdownFilePath: '/assets/static-api-reference/1.2.2/api.AngularMeteorCollection.md',
          deprecated: '1.3.0', removedIn: '1.3.1'
        },
        {
          name: '$meteor.object',
          urlName: 'meteorObject',
          markdownFilePath: '/assets/static-api-reference/1.2.2/api.meteorObject.md',
          deprecated: '1.3.0', removedIn: '1.3.1'
        },
        {
          name: 'AngularMeteorObject',
          urlName: 'AngularMeteorObject',
          markdownFilePath: '/assets/static-api-reference/1.2.2/api.AngularMeteorObject.md',
          deprecated: '1.3.0', removedIn: '1.3.1'
        },
        {
          name: '$meteor.subscribe',
          urlName: 'subscribe',
          markdownFilePath: '/assets/static-api-reference/1.2.2/api.subscribe.md',
          deprecated: '1.3.0', removedIn: '1.3.1'
        },
        {
          name: '$meteor.call',
          urlName: 'methods',
          markdownFilePath: '/assets/static-api-reference/1.2.2/api.methods.md',
          deprecated: '1.3.0', removedIn: '1.3.1'
        },
        {
          name: 'User Authentication',
          urlName: 'auth',
          markdownFilePath: '/assets/static-api-reference/1.2.2/api.auth.md',
          deprecated: '1.3.0', removedIn: '1.3.1'
        },
        {
          name: '$scope.getReactively',
          urlName: 'getReactively',
          markdownFilePath: '/assets/static-api-reference/1.2.2/api.getReactively.md',
          deprecated: '1.3.0', removedIn: '1.3.1'
        },
        {
          name: 'blaze-template directive',
          urlName: 'blaze-template',
          markdownFilePath: '/assets/static-api-reference/1.2.2/api.blaze-template.md',
          deprecated: '1.3.0', removedIn: '1.3.1'
        },
        {
          name: 'CollectionFS',
          urlName: 'files',
          markdownFilePath: '/assets/static-api-reference/1.2.2/api.collectionfs.md',
          deprecated: '1.3.0', removedIn: '1.3.1'
        },
        {
          name: '$meteorUtils',
          urlName: 'utils',
          markdownFilePath: '/assets/static-api-reference/1.2.2/api.utils.md',
          deprecated: '1.3.0', removedIn: '1.3.1'
        },
        {
          name: '$meteor.camera',
          urlName: 'camera',
          markdownFilePath: '/assets/static-api-reference/1.2.2/api.camera.md',
          deprecated: '1.3.0', removedIn: '1.3.1'
        },
        {
          name: '$meteor.session',
          urlName: 'session',
          markdownFilePath: '/assets/static-api-reference/1.2.2/api.session.md',
          deprecated: '1.3.0', removedIn: '1.3.1'
        },
        {
          name: 'File Extensions',
          urlName: 'ngFileExtension',
          markdownFilePath: '/assets/static-api-reference/1.2.2/api.ngFileExtension.md',
          deprecated: '1.3.0', removedIn: '1.3.1'
        }
      ]
    },
    {
      version: '1.2.1',
      ref: '1.2.2'
    },
    {
      version: '1.2.0',
      ref: '1.2.2'
    }
  ]
};
