This chapter is all about migrating your Angular1 app to **Angular2**, using Socially as an example.

It it based on the great [Upgrading from 1.x guide](https://angular.io/docs/ts/latest/guide/upgrade.html) on angular.io.

It includes switching from JavaScript to **TypeScript**. With that we can use all of its benefits.


## Switching to TypeScript

First of all, we have to remove JS compiler, which in our case is `pbastowski:angular-babel`.

    $ meteor remove pbastowski:angular-babel

At this point we could use `barbatus:typescript` package that compiles TypeScript into JavaScript but since we're migrating and part of Socially still requires `ng-annotate` we have to fix it somehow.

We recommend you to use `mys:typescript-ng-annotate`.

It is based on `barbatus:typescript` so when you will be fully ready to use only a typescript compiler, there won't be any issues.

    $ meteor add mys:typescript-ng-annotate

Great! We can move to more interesting part.

At first, let's take care of our client-side entry point, which is `client/main.js` file and rename it to `client/main.ts`:

<diffbox tutorial="angular1-meteor-socially" step="23.3"></diffbox>

As you can see, we also changed the way we're importing `angular` object.

Before:

    import angular from 'angular';

After:

    import * as angular from 'angular';

Let's do the same for the Socially component:

<diffbox tutorial="angular1-meteor-socially" step="23.4"></diffbox>

And again, we changed default imports of first few packages.

We can just import the default object and use the `Component.name` form:

<diffbox tutorial="angular1-meteor-socially" step="23.5"></diffbox>

Let's now repeat the process for every file of Socially app.

Done? Great!

Every module that imports `underscore` needs a little refactoring too:

<diffbox tutorial="angular1-meteor-socially" step="23.7"></diffbox>

To help you find those files:

- imports/api/parties/methods.ts
- imports/ui/components/partyRsvp/partyRsvp.ts
- imports/ui/filters/uninvitedFilter.ts

## Upgrading to Angular2

Ok, now is the time to install angular2 packages:

<diffbox tutorial="angular1-meteor-socially" step="23.8"></diffbox>

List of useful commands:

    $ npm install --save @angular/common
    $ npm install --save @angular/compiler
    $ npm install --save @angular/core
    $ npm install --save @angular/forms
    $ npm install --save @angular/platform-browser
    $ npm install --save @angular/platform-browser-dynamic
    $ npm install --save @angular/upgrade
    $ npm install --save angular2-meteor
    $ npm install --save angular2-meteor-polyfills
    $ npm install --save es6-shim
    $ npm install --save reflect-metadata
    $ npm install --save rxjs
    $ npm install --save underscore
    $ npm install --save zone.js

> angular2-meteor-polyfills is helpful to load rxjs, reflect-metadata and zone.js in the correct order

Since we want to have Angular1 working side by side with Angular2 we have to use UpgradeAdapter.

To read more about it, you can go to ["How the UpgradeAdapter works"](https://angular.io/docs/ts/latest/guide/upgrade.html#!#how-the-upgrade-adapter-works) chapter of Angular Docs.

At first we need an instance of `UpgradeAdapter`:

<diffbox tutorial="angular1-meteor-socially" step="23.9"></diffbox>

Now we can bootstrap Socially with using UpgradeAdapter:

<diffbox tutorial="angular1-meteor-socially" step="23.10"></diffbox>

## Filters to Pipes

Angular1's filters are similar to Angular2's pipes. In Angular Docs, there is a [good explanation](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#filters-pipes) of how they works and what are the differences.

Since we'll be using filters on ng1 side and pipes on ng2's, we have to create them separately.

<diffbox tutorial="angular1-meteor-socially" step="23.11"></diffbox>

Let's me explain to you what happened there.

* import Pipe decorator.
* change name to *displayName*.
* move a function to be a class with `transform` method.
* remove everything related to Angular1

And now the same process but for `uninvited` pipe:

<diffbox tutorial="angular1-meteor-socially" step="23.12"></diffbox>

We cannot return `false` inside `ngFor` directive so let's change it to an empty array:

<diffbox tutorial="angular1-meteor-socially" step="23.13"></diffbox>

## Preparing ng1 component for migration

First of all we have to import `Component` ([read more](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html#!#controllers-components)) and use it as a decorator:

<diffbox tutorial="angular1-meteor-socially" step="23.14"></diffbox>

Now we can take care of Pipes, use them instead of Filters:

<diffbox tutorial="angular1-meteor-socially" step="23.15"></diffbox>

## Switching to angular2-meteor

We already installed `angular2-meteor`, we can now just import `MeteorComponent`.

PartyUninvited needs to be extended by MeteorComponent. We also have to call its constructor by using `super()`.

<diffbox tutorial="angular1-meteor-socially" step="23.16"></diffbox>

Replace angular-meteor API with angular2-meteor's.

<diffbox tutorial="angular1-meteor-socially" step="23.17"></diffbox>

To use this ng2 component within ng1 app we need to downgrade it.

UpgradeAdapter API contains `downgradeNg2Component` method, let's use it!

<diffbox tutorial="angular1-meteor-socially" step="23.18"></diffbox>

Did you notice that we used `directive` instead of `component`? I bet you did!

Let's now take care of bindings. We need to import `Input` and use it as an annotation of `party` property.

To learn more about it, we recommend you to read ["Component Communication"](https://angular.io/docs/ts/latest/cookbook/component-communication.html) chapter of Angular Docs.

<diffbox tutorial="angular1-meteor-socially" step="23.19"></diffbox>

We will no longer use prefixed variables inside a template, let's remove them:

<diffbox tutorial="angular1-meteor-socially" step="23.20"></diffbox>

We're using Pipes instead of Filters, so template also needs to be updated:

<diffbox tutorial="angular1-meteor-socially" step="23.21"></diffbox>

`ngFor` is equivalent to `ng-for`, this also needs a change:

<diffbox tutorial="angular1-meteor-socially" step="23.22"></diffbox>

Let me show you the difference:

Angular 1:

    <div ng-for="user in users"></div>

Angular 2:

    <div *ngFor="let user of users"></div>


We have to also take care of click event:

<diffbox tutorial="angular1-meteor-socially" step="23.23"></diffbox>

Since PartyUninvited is a ng2 component we have to change the way we're passing a value:

<diffbox tutorial="angular1-meteor-socially" step="23.24"></diffbox>

Instead of just an `attribute` we use `[attribute]`, which is a one-way binding.

<diffbox tutorial="angular1-meteor-socially" step="23.25"></diffbox>

Now let's do the same but for `PartyDetails`:

<diffbox tutorial="angular1-meteor-socially" step="23.26"></diffbox>

We will use ng1 component inside ng2 component. It requires a special attention!

UpgradeAdapter's API contains `upgradeNg1Component` method, let's use it:

<diffbox tutorial="angular1-meteor-socially" step="23.27"></diffbox>

And yet again, `MeteorComponent`:

<diffbox tutorial="angular1-meteor-socially" step="23.28"></diffbox>

Now we have to downgrade ng2 component. Let's do the same what we did with PartyUninvited.

<diffbox tutorial="angular1-meteor-socially" step="23.30"></diffbox>

Since we have a router on ng1 side we have to somehow pass `partyId` to `PartyDetails` component:

<diffbox tutorial="angular1-meteor-socially" step="23.30"></diffbox>

Okay, we still need to take care of bindings:

<diffbox tutorial="angular1-meteor-socially" step="23.31"></diffbox>

Output is the same as Input but works in reverse direction. It helps you to share some property with other components.

## Removing ng1 support

PartyUninvited no longer have to be working on ng1 side. We can get rid of Angular1 API:

<diffbox tutorial="angular1-meteor-socially" step="23.32"></diffbox>

## Using Material2

Yes, you read it right! We can also move our app design to Angular2 keeping the similar API.

Let's install few packages we will need:

<diffbox tutorial="angular1-meteor-socially" step="23.33"></diffbox>

List of all commands:

    $ npm install --save @angular2-material/core
    $ npm install --save @angular2-material/checkbox
    $ npm install --save @angular2-material/button
    $ npm install --save @angular2-material/input


We have now `md-checkbox`, `md-button` and `md-input`.

We need to register those directives inside PartyDetails component:

<diffbox tutorial="angular1-meteor-socially" step="23.34"></diffbox>

This is how it looks now, after implementing all material2 directives:

<diffbox tutorial="angular1-meteor-socially" step="23.35"></diffbox>

And that's it! You have now Angular1 working side by side with Angular2.

UpgradeAdapter is pretty awesome, right?

Now you can start learning Angular 2 Meteor [here](/tutorials/socially/angular2/bootstrapping) and upgrade app.
