So let's continue! now we will migrate the list of todo, so far we use an existing Blaze Template called `Lists_show_page` inside a new Angular 2 Component called `ListShowComponent`.

First, let's modify the template, we use the same techniques we learned in the previous steps - we will use the existing template and just change the events, bindings and directives:

<diffbox tutorial="migration-angular2" step="8.1"></diffbox>

Assuming you already got it, let's migrate the Template code into a Component:

<diffbox tutorial="migration-angular2" step="8.2"></diffbox>

> At the moment, we will use the exiting `Todo_item` template to show the items - we will later migrate it too - so we just pass the required params using `getContextForItem`.

Great, now we need to implement the events we had in the Blaze Template, let's add them first to the view:

<diffbox tutorial="migration-angular2" step="8.3"></diffbox>

And now let's implement and migrate the code into the Component's class:

<diffbox tutorial="migration-angular2" step="8.4"></diffbox>

That's it! we can now remove the old files of this Template (`imports/ui/components/lists-show.html`, `imports/ui/components/lists-show.js`, `imports/ui/pages/lists-show-page.js`, `imports/ui/pages/lists-show-page.html`), and we can removed the imports for those files from the routes file (`imports/startup/client/routes.js`).
