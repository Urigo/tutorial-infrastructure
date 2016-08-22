First step of migration is to migrate the Router.

Our example To-do application uses *FlowRouter* in order to define it's routes, we can see the definitions in `/imports/startup/client/routes.js`.

Our goal now is to migrate the router into Angular 2 Router - this step is very important and we need to do it first in order to load later Angular 2 Components with Blaze Template inside them.

So let's start by commenting or removing the FlowRouter definitions:

<diffbox tutorial="migration-angular2" step="3.1"></diffbox>

And now let's define those routes using Angular 2 Router - the definition is in our main component file:

<diffbox tutorial="migration-angular2" step="3.2"></diffbox>

So what do we have here?

- We imported and used `ROUTER_DIRECTIVES` in the Component declaration because we need to declare using those directive.
- The directives we imported in use in the Component's template - notice that we use `router-outlet` tag - this tag will be the container of the current route.
- We imported and used the `RouteConfig` decorator - we defined two routes and connected a Component for each route.
- We imported and added `ROUTER_PROVIDERS` to the `bootstrap` call in order to load the providers of the Router.

Also, we need to add `<base>` tag in our `<head>` for the router:

<diffbox tutorial="migration-angular2" step="3.3"></diffbox>


Noticed that we used two components in the routes? `MainContainerComponent` and `ListShowComponent` - let's create a stub component for those components (we will implement them later).

<diffbox tutorial="migration-angular2" step="3.4"></diffbox>

<diffbox tutorial="migration-angular2" step="3.5"></diffbox>

And now let's import these component in the main component:

<diffbox tutorial="migration-angular2" step="3.6"></diffbox>

So now our app should be empty, because non of the existing Blaze Templates loaded (they were loaded by the Router according to the current URL).

In the next step we will load the Blaze Template into our route.
