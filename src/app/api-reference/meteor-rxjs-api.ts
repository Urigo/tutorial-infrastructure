import {ApiDefinition} from '../core/api-definition';

export const METEOR_RXJS_API_REFERENCE : ApiDefinition = {
  name: "meteor-rxjs",
  apiRepository: 'Urigo/meteor-rxjs',
  files: [
    {
      apiTitle: 'MeteorObservable',
      filePath: 'docs/MeteorObservable.md'
    },
    {
      apiTitle: 'ObservableCollection',
      filePath: 'docs/ObservableCollection.md'
    },
    {
      apiTitle: 'ObservableCursor',
      filePath: 'docs/ObservableCursor.md'
    }
  ],
  versions: [
    {
      name: 'latest',
      visibleName: '0.4.5',
      revision: 'ec411b57da599a499e9bf183b0edf99d5b27049a'
    },
    {
      name: '0.4.4',
      revision: 'b3584de98840c7e29af177db3e7d0c65c42cc4b9'
    },
    {
      name: '0.4.3',
      revision: 'c6f9bba81cc832780c345a9caf49f62897ec2001'
    },
    {
      name: '0.4.2',
      revision: 'b3559a333bb70e91ee83314248f60002856bea0f'
    },
    {
      name: '0.4.1',
      revision: '59772fff59f4060db63c0cce969c2beaa98c1a35'
    }
  ]
};
