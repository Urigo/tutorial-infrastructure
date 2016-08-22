The route `/` defined as a route that does not do much - it just finds the one of the To-do lists and redirects there (in `imports/ui/pages/root-redirector.js`) - to let's do the same!

We will need to extend `MeteorComponent` in order to use Meteor features inside our Angular 2 Component:

<diffbox tutorial="migration-angular2" step="4.1"></diffbox>

And now let's find one of the lists and redirect to it by using the Router:

<diffbox tutorial="migration-angular2" step="4.2"></diffbox>

> Note that we used Angular 2 dependency injection here - we just used the `router : Router` in the constructor and Angular 2 did his magic and provided us the instance of the Router.

But now we have a problem - because the `Lists` collection is always empty! this happens because the Blaze code was the one to use `Meteor.subscribe` and subscribed to the actual data in the collection.

So let's subscribe to the data in our collection - we need to use the `subscribe` method we get from `MeteorComponent` and wraps `Meteor.subscribe` and connects it to Angular 2 environment:

<diffbox tutorial="migration-angular2" step="4.3"></diffbox>

> Note that you have to call `super()` when using `MeteorComponent` methods.

> We also used `this.autorun` to run that code when we get the actual data from the collection.

So now our main page redirects to one of the lists page when it's loaded - let's continue!
