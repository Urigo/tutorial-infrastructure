First, let's create Angular 2 basic component in the `client/main.ts` file:

<diffbox tutorial="migration-angular2" step="2.1"></diffbox>

Let's understand what do we have here - `MainComponent` created as component, with the `app` tag selector.

With use Angular 2 `bootstrap` method to init this component as the main component of the application.

Now we need to use the `<app>` tag in order to load the application.

In order to do so, we first need to change the main HTML file name, and add `.ng2` to the extension, so it will compile as Angular 2 template:

<diffbox tutorial="migration-angular2" step="2.2"></diffbox>

> We also changed the name from "head" to "index" - it's optional.

Now we need to we the `<app>` tag, so let's add `<body>` to the main HTML file and add the tag inside:

<diffbox tutorial="migration-angular2" step="2.3"></diffbox>