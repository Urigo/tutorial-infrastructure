In this chapter we will add Ng2Material to our project, and update some style and layout in the project.

Ng2Material documentation can be found [here](https://justindujardin.github.io/ng2-material/), and we recommend to read it before this chapter, because we will use it's components now.

# Removing Bootstrap 4

First, let's remove our previous framework (boostrap) by running:

    $ meteor npm uninstall --save bootstrap

And let's remove the import from the `main.sass` file:

<diffbox tutorial="angular2-meteor-socially" step="18.1"></diffbox>

# Adding and importing Ng2Material

Now we need to add Ng2Material to our project - so let's do that.

Run the following command in your Terminal:

    $ meteor npm install ng2-material --save

Now we will import it in the main page, we also need to declare that we are going to use `MATERIAL_DIRECTIVES` which is a shorthand for all of the components and directives that Ng2Material exports, and also import the module's providers in our `bootstrap` call:

<diffbox tutorial="angular2-meteor-socially" step="18.3" filename="client/app.ts"></diffbox>

And we will also need to import the style files:

<diffbox tutorial="angular2-meteor-socially" step="18.3" filename="client/css/main.scss"></diffbox>

And let's update our fonts to the Material official fonts:

<diffbox tutorial="angular2-meteor-socially" step="18.4"></diffbox>

That's it - now we can use it!

# Use Ng2Material

Like we did in the previous chapter - let's take care of the navigation bar first.

We use directives and components from Ng2Material - such as `md-toolbar`.

In order to use `md-toolbar`, we need to fetch the code of this package, by running:

    meteor npm install @angular2-material/core @angular2-material/toolbar --save

And now we can import it in our main component:

<diffbox tutorial="angular2-meteor-socially" step="18.5" filename="client/app.ts"></diffbox>

> Note that we also imported the CSS file of mdToolbar component - Meteor allows us to do such imports!

And use it in the main component's template:

<diffbox tutorial="angular2-meteor-socially" step="18.5" filename="client/app.html"></diffbox>

Now let's take care of the parties form.

In the form we will use another two extra components on ngMaterial2: MdInput and MdCheckbox - we also need to fetch their packages:

    meteor npm install @angular2-material/input --save
    meteor npm install @angular2-material/checkbox --save

Now let's add all the imports to the component:

<diffbox tutorial="angular2-meteor-socially" step="18.6" filename="client/imports/parties-form/parties-form.ts"></diffbox>

And now let's update it's layout:

<diffbox tutorial="angular2-meteor-socially" step="18.7"></diffbox>

We use the mdInput component which is a wrapper for regular HTML input with style and cool layout.

And now import the directives into the parties list:

<diffbox tutorial="angular2-meteor-socially" step="18.8"></diffbox>

And we will also add the MdInput import:

<diffbox tutorial="angular2-meteor-socially" step="18.9" filename="client/imports/parties-list/parties-list.ts"></diffbox>

And now update the parties list layout:

<diffbox tutorial="angular2-meteor-socially" step="18.9" filename="client/imports/parties-list/parties-list.html"></diffbox>

Now we need to make some changes in the style files in order to get better result, so let's start with the parties list style file:

<diffbox tutorial="angular2-meteor-socially" step="18.10"></diffbox>

Now let's add the import in the party details component:

<diffbox tutorial="angular2-meteor-socially" step="18.11"></diffbox>

And update its layout:

<diffbox tutorial="angular2-meteor-socially" step="18.12"></diffbox>

# Custom Authentication Components

Our next step will replace the `login-buttons` which is a simple and non-styled login/signup component - we will add our custom authentication component with custom style.

First, let's remove the `login-buttons` from the navigation bar, and replace it with custom buttons for Login / Signup / Logout.

We will also add `routerLink` to each button, and add logic to hide/show buttons according to the user's login state:

<diffbox tutorial="angular2-meteor-socially" step="18.13"></diffbox>

Now we need to define the new routes in the `app.ts` file, where we defined our previous routes. We all use `InjectUser()` decorator to inject the user data into the component, so the `ngIf` and `[hidden]` we added will work:

<diffbox tutorial="angular2-meteor-socially" step="18.14"></diffbox>

And let's create the login component:

<diffbox tutorial="angular2-meteor-socially" step="18.15"></diffbox>

In this component we use Meteor's accounts (`meteor/accounts-base` package), and use the Accounts API to login our user with email and password.

And the login view:

<diffbox tutorial="angular2-meteor-socially" step="18.16"></diffbox>

Signup component:

<diffbox tutorial="angular2-meteor-socially" step="18.17"></diffbox>

In this component we use Meteor's accounts, and use the Accounts API to add a new user.

And signup view:

<diffbox tutorial="angular2-meteor-socially" step="18.18"></diffbox>

We also have "Recover" button in the login page, so let's create a component that handles that:

<diffbox tutorial="angular2-meteor-socially" step="18.19"></diffbox>

And its view:

<diffbox tutorial="angular2-meteor-socially" step="18.20"></diffbox>

Our last missing piece is the Logout feature, which we will add in the main component, because it is located in the navigation bar:

<diffbox tutorial="angular2-meteor-socially" step="18.21"></diffbox>

That's it! we just implemented our own authentication components using Meteor's Accounts API and Ng2Material!

# Summary

In this chapter we replaced Bootstrap 4 with Ng2Material, and updated all the view and layout to match the component we got from Ng2Material.

We also learnt how to use Meteor's Accounts API and how to implement authentication view and components, and how to connect them to our app.
