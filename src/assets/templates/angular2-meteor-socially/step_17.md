In this chapter we will add Twitter's bootstrap to our project, and add some style and layout to the project.

# Adding and importing Bootstrap 4

First, we need to add Boostrap 4 to our project - so let's do that.

Run the following command in your Terminal:

    $ meteor npm install --save bootstrap@4.0.0-alpha.2

We are also going to use the [sass](http://sass-lang.com/) version of Bootstrap.

For that we need to add package that handle SASS files. But wait, we already have one! The `angular2-compilers` package supports SASS, SCSS and LESS files.

To import it into the project, we will rename `main.css` to `main.scss` and import bootstrap:

<diffbox tutorial="angular2-meteor-socially" step="17.2"></diffbox>

And it will import Boostrap's styles into your project.

# First touch of style

Now let's add some style! we will add navigation bar in the top of the page.

We will also add a container with the `router-outlet` to keep that content of the page:

<diffbox tutorial="angular2-meteor-socially" step="17.3"></diffbox>

# Moving things around

So first thing we want to do now, is to move the login buttons to another place - let's say that we want it as a part of the navigation bar.

So first let's remove it from it's current place (parties list), first the view:

<diffbox tutorial="angular2-meteor-socially" step="17.4" filename="client/imports/parties-list/parties-list.html"></diffbox>

And from the `PartiesList` component:

<diffbox tutorial="angular2-meteor-socially" step="17.4" filename="client/imports/parties-list/parties-list.ts"></diffbox>

And add it to the main component, which is the component that responsible to the navigation bar, so the view first:

<diffbox tutorial="angular2-meteor-socially" step="17.5"></diffbox>

And do not forget that we need to import it:

<diffbox tutorial="angular2-meteor-socially" step="17.6"></diffbox>

# Fonts and FontAwesome

Meteor gives you the control of your `head` tag, so you can import fonts and add your `meta` tags.

We will add a cool font and add [FontAwesome](https://fortawesome.github.io/Font-Awesome/) style file, which also contains it's font:

<diffbox tutorial="angular2-meteor-socially" step="17.7"></diffbox>

# Some more style

So now we will take advantage of all Bootstrap's features - first let's update the layout of the form:

<diffbox tutorial="angular2-meteor-socially" step="17.8"></diffbox>

And now the parties list:

<diffbox tutorial="angular2-meteor-socially" step="17.9"></diffbox>

# Styling components

We will create style file for each component.

We will also add `_` prefix to the file, to indicate the SASS compiler that this is just an import file and not the main SASS files - we will load those files in our main SASS file.

So let's start with the parties list, and add some style (it's not that critical at the moment what is the effect of those CSS rules)

<diffbox tutorial="angular2-meteor-socially" step="17.10" filename="client/imports/parties-list/_parties-list.scss"></diffbox>

And now let's add SASS file for the party details:

<diffbox tutorial="angular2-meteor-socially" step="17.11" filename="client/imports/party-details/_party-details.scss"></diffbox>

import it into the main SASS file:

<diffbox tutorial="angular2-meteor-socially" step="17.10" filename="client/css/main.scss"></diffbox>

And use those new cool styles in the view of the party details:

<diffbox tutorial="angular2-meteor-socially" step="17.12"></diffbox>


# Summary

So in this chapter of the tutorial we added the Bootstrap library and used it's layout and CSS styles.

We also learned how to integrate SASS compiler with Meteor and how to create isolated SASS styles for each component.
