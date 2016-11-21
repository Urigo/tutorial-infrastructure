import {ApiDefinition} from '../core/api-definition';

const movedToRxjs = {
  inVersion: '0.7.0',
  notice: 'Moved to meteor-rxjs package'
};

const deprecations = {
  MeteorReactive: {
    inVersion: '0.7.1'
  },
  MeteorObservable: movedToRxjs,
  'MongoObservable.Collection': movedToRxjs,
  ObservableCursor: movedToRxjs,
  MeteorComponent: {
    inVersion: '0.6.0',
    removedIn: '0.7.0'
  },
  bootstrap: {
    inVersion: '0.6.0',
    removedIn: '0.7.0'
  }
};

export const ANGULAR2_METEOR_API_REFERENCE : ApiDefinition = {
  name: "angular2-meteor",
  apiRepository: 'Urigo/angular2-meteor',
  deprecations: deprecations,
  files: [
    {
      apiTitle: 'Meteor-RxJS',
      mdFile: '/assets/templates/pages/api-docs-0.7.1-rxjs.md'
    },
    {
      apiTitle: 'angular2-compilers',
      mdFile: '/assets/templates/pages/api-docs-angular2-compilers.md'
    },
    {
      apiTitle: 'MeteorComponent',
      filePath: 'dist/meteor_component.js'
    },
    {
      apiRepository: 'Urigo/angular-meteor',
      apiTitle: 'MeteorReactive',
      filePath: 'dist/meteor_reactive.js',
      revision: '3158559d70cd8f0d9bac0f213de8d233bfb22801'
    },
    {
      apiTitle: 'MeteorObservable',
      filePath: 'dist/minimongo-observable/meteor-observable.js'
    },
    {
      apiTitle: 'MongoObservable.Collection',
      filePath: 'dist/minimongo-observable/observable-collection.js'
    },
    {
      apiTitle: 'ObservableCursor',
      filePath: 'dist/minimongo-observable/observable-cursor.js'
    },
    {
      apiTitle: 'bootstrap',
      filePath: 'dist/bootstrap.js',
      apiRepository: 'Urigo/angular2-meteor-auto-bootstrap',
      revision: 'master'
    }
  ],
  versions: [
    {
      name: 'latest',
      visibleName: '0.7.1',
      revision: '72b6c5d34d7d14061d5d6e515d981df424bf1256',
      exclude: ['bootstrap', 'MeteorComponent', 'MeteorObservable', 'MongoObservable.Collection', 'ObservableCursor']
    },
    {
      name: '0.7.0',
      revision: '6e160958ac163fe476ef11548e54d216d6c20e1a',
      exclude: ['Meteor-RxJS', 'MeteorReactive', 'bootstrap']
    },
    {
      name: '0.6.0',
      revision: '0a59100961c6a7e01fee69f6f335cd901d735568',
      exclude: ['angular2-compilers', 'Meteor-RxJS', 'MeteorReactive', 'MeteorObservable', 'MongoObservable.Collection', 'ObservableCursor']
    },
    {
      name: '0.4.2',
      revision: '0a59100961c6a7e01fee69f6f335cd901d735568',
      exclude: ['angular2-compilers', 'Meteor-RxJS', 'MeteorReactive', 'MeteorObservable', 'MongoObservable.Collection', 'ObservableCursor']
    }
  ]
};
