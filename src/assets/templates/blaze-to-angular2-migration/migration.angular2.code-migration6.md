So far we have Angular 2 application with Angular 2 Router, that wraps existing Blaze application and load it's Templates.

Our next step is about converting Blaze existing Template into Angular 2 Component.

In order to to so, we need to work top-down - because we can load Blaze existing Template from Angular 2 code.

So at the moment, the top most Blaze Template that loaded is the `App_Body` which contains the following:

- Full layout
- Dynamic load of child Blaze Templates
- List of To-do lists
- Other UI features such as login, sign-up and more

So let's start with the migration - our goal now is to migrate the `App_Body` so we can remove the Blaze files in the end of this step.

The replacement of this component as the main component will be our `MainContainerComponent`.

Let's start with the HTML template - we will create a new file named `client/imports/components/main-container.ng2.html` and copy the contents of the `App_Body` template from the file (`imports/ui/layouts/app-body.html`).

Now let's start to make some modifications to make that file a valid Angular 2 template - we need to remove all the Blaze UI bindings, if, each and such.

We will replace them as follow:

- Blaze if/else - will become `ngIf`.
- Blaze each - will become `ngFor`.
- Blaze classes bindings will become `ngClass`.
- Dynamic load of Blaze Template will become `router-outlet`.

> We will also remove all the router dynamic links, and put a placeholder for them at the moment - we will take care of them later.

<diffbox tutorial="migration-angular2" step="6.1"></diffbox>

> Note that unlike Blaze, in Angular 2 we define events such click in the HTML - we will handle that later.

So now we have the HTML template - we need to add some code to the Angular 2 Component:

- We need to use the new template.
- We need to add stubs for the methods we use in the template (`isConnected`, `isCurrentList`, `emailLocalPart`)
- We need to declare the usage of `ROUTER_DIRECTIVES` (we now use `router-outlet`).

So let's do it:

<diffbox tutorial="migration-angular2" step="6.2"></diffbox>

> We also commented the code that in charge of redirection to a list page, we will handle that later.

Now, we need to provide the `lists` object to the view - this will be that lists of Todo lists.

We will create a `Mongo.Cursor` object according to the current code we have in `App_body` template helpers:

<diffbox tutorial="migration-angular2" step="6.3"></diffbox>

> Notice that we put the definition inside `autorun` scope because we use `Meteor.user` method, which can change if the user login or logout.

Now let's implement the stub methods we created earlier, starting with `isConnected`:

<diffbox tutorial="migration-angular2" step="6.4"></diffbox>

And `emailLocalPart`:

<diffbox tutorial="migration-angular2" step="6.5"></diffbox>

Great. Now our next step is to use the existing `Lists_show_page` in the `ListShowComponent` instead of the existing.

First, let's make some modifications in the routes definitions because now we want to load only the template `Lists_show_page` inside the `MainContainerComponent`, and not as root route - it should go inside the main component of Angular 2.

So let's remove the old definitions, and add `...` in the definition of the main route, to indicate that this route can have child routes:

<diffbox tutorial="migration-angular2" step="6.6"></diffbox>

And define the list-show route inside the `MainContainerComponent`:

<diffbox tutorial="migration-angular2" step="6.7"></diffbox>

Now let's update `ListShowComponent` to load `Lists_show_page` instead of `App_body`:

<diffbox tutorial="migration-angular2" step="6.8"></diffbox>

Remember the redirection we commented earlier? now let's add it, but now we will use another approach - we will create a route for that logic, and define it as default route - so when a client access `/` - the redirection component will run and redirect it to the `ListShowComponent`.

So let's add the route first:

<diffbox tutorial="migration-angular2" step="6.9"></diffbox>

And the actual component:

<diffbox tutorial="migration-angular2" step="6.10"></diffbox>

Now let's go back to the `MainContainerComponent` and keep implementing the missing logic

We need to add some booleans we use in our view, and we need to implement `isCurrentList` method, which we use in the view to check if the a list item is the selected list:

<diffbox tutorial="migration-angular2" step="6.11"></diffbox>

> We use `router.currentInstruction` to get the current active route in the Angular 2 router, and from that object we can get the active Component and it's route params.

Few steps ago, we migrated the HTML template and we used a placeholders for the router's links - now let's replace them with real links:

<diffbox tutorial="migration-angular2" step="6.12"></diffbox>

> The use `routerLink` which is a directive that creates a link to Angular 2 route.

At the moment we are still missing the Join and Signin routes, so let's defined them:

<diffbox tutorial="migration-angular2" step="6.13"></diffbox>

And let's create stubs Components, we will later implement them:

<diffbox tutorial="migration-angular2" step="6.14" filename="client/imports/components/join.component.ts"></diffbox>

<diffbox tutorial="migration-angular2" step="6.14" filename="client/imports/components/signin.component.ts"></diffbox>

Now the only missing things are the UI events for the buttons such logout and create new list.

So first let's migrate the create new list code, and create a method on the Component:

<diffbox tutorial="migration-angular2" step="6.15"></diffbox>

And let's add the event registration in the view:

<diffbox tutorial="migration-angular2" step="6.16"></diffbox>

We will do the same for logout:

<diffbox tutorial="migration-angular2" step="6.17"></diffbox>

And use it in the view:

<diffbox tutorial="migration-angular2" step="6.18"></diffbox>

> The only missing thing at the moment is the `currentUser` field in this Component - we will add it in the next step.

Now we can remove the old Blaze Templates from the project (commit #6.19).

So at the moment, we have fully migrated Blaze Template and all the application features works as before!
