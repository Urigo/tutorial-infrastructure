## Angular2-Meteor & Meteor-RxJS

Since version `0.7.0` of `angular2-meteor`, we offer our users to use `meteor-rxjs` package (which is part of the Angular2-Meteor boilerplate) in order to acheive better results when using Angular 2 along with Meteor.

Angular 2 depends and uses `ngrx` package, and supports `Observable` data sources (for example, using `ngFor` directive).

`meteor-rxjs` package wraps Meteor basic functionality and exposes RxJS interface to your data and methods.

All of Angular2-Meteor tutorials are up-to-date and uses Reactive Extensions to manipulate the Meteor data, and display it using Angular 2 support for RxJS.

Older APIs, such as `MeteorReactive` (formerly `MeteorComponent`) are still available, but deprecated, and will be removed in a future release.

`angular2-meteor` package is now a combination between `meteor-rxjs` and `angular2-compilers` package.

### Getting Started

In order to use `meteor-rxjs` in your application, start by installing it from NPM:

    $ npm install meteor-rxjs --save
    
Then, create your Mongo Collections using Meteor-RxJS:
    
```ts
import {MongoObservable} from 'meteor-rxjs';

export const MyCollection = MongoObservable.Collection('myCollection');
```

And use it's regular API in order to get `Observable` of you data, and display it using Async Pipe of Angular 2:

```ts
import {Observable} from 'rxjs';
import {MyCollection} from '../both/my-collection';

@Component({
  template: '<ul><li *ngFor="let item of myData | async"> {{ item }} </li></ul>'
})
export class MyComponent {
  myData: Observable<any>;
  
  constructor() {
    this.myData = MyCollection.find({});
  }
}
```

### See Also

- [Meteor-RxJS API Documentation](api/meteor-rxjs/latest/MeteorObservable)
- [RxJS API Documentation](http://reactivex.io/rxjs/)
- [meteor-rxjs @ GitHub](https://github.com/Urigo/meteor-rxjs)
