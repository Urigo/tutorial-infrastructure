{{#template name="tutorials.socially.angular2.step_05.md"}}
{{> downloadPreviousStep stepName="step_04"}}

In this step, you will learn:

-  how to create a layout template
-  how to build an app that has multiple views with the new Angular router.

The goal for this step is to add one more page to the app that shows the details of the selected party.

By default we have a list of parties shown on the page, but when a user clicks on a list item, the app should navigate to the new page and show selected party details.

# Import Router Dependencies

Let install the Angular 2 router from npm:

    $ meteor npm install --save @angular/router

Now let's import routing dependencies into our app. We'll need router providers ([`provideRouter`](https://angular.io/docs/ts/latest/api/router/index/provideRouter-function.html)), directives ([`ROUTER_DIRECTIVES`](https://angular.io/docs/ts/latest/api/router/index/ROUTER_DIRECTIVES-let.html)), and configuration (`RouteConfig`). More on what each of these does later.

Be sure to add `ROUTER_DIRECTIVES` to the Component decorator itself to import all directive dependencies into the template.

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.1"}}

# Multiple Views and Layout Template

Our app is slowly growing and becoming more complex.
Until now, the app provided our users with a single view containing a list of all parties and a form to add new parties.

The next step in building the app is to add a view that will show detailed information about each of the parties in our list.

To add the detailed view, we could expand the `app.html` file to contain template code for both views, but that could get messy very quickly.

Instead, we are going to turn the Socially component into what we call a "layout template". This is a template that is common for all views in our application.
Other "partial templates" are then included into this layout template depending on the current "route" — that is, the view that is currently displayed to the user.

Another great feature of the Angular 2 router is that we can route directly to a component.
This type of routing is also known as _Component Routing_. And it makes it really easy to configure routes.

So, first, we are going to split our app into 2 main views (or pages): Parties List and Party Details.
Then, we are going to use `RouteConfig` with `provideRouter`
to configure routes, which basically means we will wire components to unique URLs.

## Parties List

Let's move the content of Socially in `app.ts` out into a `PartiesList` component.

Create a new file called `parties-list.ts` and put it in its own component folder.

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.2"}}

Move `app.html` into the parties-list directory and rename it `parties-list.html`:

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.3"}}

Also, let's clean-up `app.ts` to prepare it for the next steps:

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.4"}}

## Party Details

Let's add another main view to the app: `PartyDetails`.
Since it's not possible yet to get party details in this component, we are only going to make stubs.

When we're finished, clicking on a party in the list should route to the `PartyDetails` component for more information.

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.6"}}

And add a simple template outline for the party details:

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.7"}}

At this point our front-end app structure should look like this:

    client
      \- imports
        \- parties-list
        \- parties-form
        \- party-details

At this point, your app will not run until our routes are configured.

# Configuring Routes

Let's configure our routes. This is how we map url paths to components.

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.8"}}

We've added multiple things here. Firstly, we've imported
our two main views `PartiesList` and `PartyDetails`,
then we tied them to URLs using `RouteConfig` with `provideRouter` to create `APP_ROUTER_PROVIDERS` which contains every provider exposed by `@angular/router`.

Also, we need to change our template file **client/app.html** to this:

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.9"}}

This is going to be our "default layout" template. The `router-outlet` directive will
render a view on the page based on the current URL.

If `PartyDetails` view is targeted with a `partyId` parameter, it will route to the `PartyDetails` component with access to that parameter.

The last line of code that we've added to the app bootstrap method
configures the app base route by means of the dependency injection mechanism.
The same thing was usually done in Angular 1 by placing

    <base href="/">

in the app template.

# RouterLink

Let's add links to the new router details view from the list of parties.

As we've already seen, each party link consists of two parts: the base `PartyDetails`
URL and a party ID, represented by the `partyId` in the configuration.
There is a special directive called `routerLink` that will help us to compose each URL.

First we'll import the directive and specify it as a view directive in the `PartiesList`:

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.10"}}

Now we can wrap our party in a `routerLink` and pass in the `_id` as a parameter. Note that the id is auto-generated when an item is inserted into a Mongo Collection.

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.11"}}

`routerLink` takes an array of URL parts as it was defined in the configuration and
then composes a full URL. By the first `/party` item we instruct `routerLink` to
find URL path to the `PartyDetails` view in the root routing config.
Since each component in Angular 2 can have own routing config,
if we put `/` there, the directive would resolve routes accordingly to
`PartiesList` routing config if any.

# Injecting Route Params

We've just added links to the `PartyDetails` view.

The next thing is to grab the `partyId` route parameter in order to load the correct party in the `PartyDetails` view.

In Angular 2, it's as simple as passing the `ActivatedRoute` argument to the `PartyDetails` constructor:

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.12"}}

Dependency injection is employed heavily here by Angular 2 to do all the work behind the scenes.
TypeScript first compiles this class with the class metadata that says what argument types this class expects in the constructor (i.e. `ActivatedRoute`),
so Angular 2 knows what types to inject if asked to create an instance of this class.

Then, when you click on a party details link, the `router-outlet` directive will create a `ActivatedRoute` provider that provides
parameters for the current URL. Right after that moment if a `PartyDetails` instance is created by means of the dependency injection API, it's created with `ActivatedRoute` injected and equalled to the current URL inside the constructor.

If you want to read more about dependency injection in Angular 2, you can find an extensive overview in this [article](http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html).
If you are curious about class metadata read more about it [here](http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html).

Let's now load a party instance using a received ID parameter:

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.13"}}

We also have to make it reactive, because we don't know if the subscription is ready by now.

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.14"}}

> To read more about Tracker.autorun [click here](http://docs.meteor.com/api/tracker.html#Tracker-autorun).

To apply any change of `party` to UI, we have to use `NgZone.run()` method. If you familiar with Angular1 you can think of it as sort of $scope.apply(), but only sort of!

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.15"}}

> Official Angular2 docs about [NgZone](https://angular.io/docs/js/latest/api/core/NgZone-class.html)

And render the party details on the page:

{{> DiffBox tutorialName="meteor-angular2-socially" step="5.16"}}

# Challenge

Add a link back to the `PartiesList` component from `PartyDetails`.

# Summary

Let's list what we've accomplished in this step:

- split our app into two main views
- configured routing to use these views and created a layout template
- learned briefly how dependency injection works in Angular 2
- injected route parameters and loaded party details with the ID parameter

{{/template}}
