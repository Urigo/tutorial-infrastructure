In this chapter we will add Twitter's bootstrap to our project, and add some style and layout to the project.

At the moment, this tutorial we will use only Bootstrap's CSS file and not the JavaScript - but note that you can use all the features of Boostrap 4.

# Adding and importing Bootstrap 4

First, we need to add Boostrap 4 to our project - so let's do that.

Run the following command in your Terminal:

    $ meteor npm install bootstrap@4.0.0-alpha.2 --save

<diffbox tutorial="angular1-meteor-socially" step="17.4"></diffbox>

And it will import Boostrap's CSS to your project.

# Add LESS

OK, simple styling works, but we want to be able to use [LESS](http://lesscss.org/).

We can't add LESS from NPM because it is a compiler and we want it to be a part of Meteor build - so we will add it from Atmosphere:

    $ meteor add less

We will use LESS in a few steps!

# First touch of style

Now let's add some style! We will set just a background color.

<diffbox tutorial="angular1-meteor-socially" step="17.3"></diffbox>


Let's move loginButton to Navigation and set .container-fluid to the uiView directive.

<diffbox tutorial="angular1-meteor-socially" step="17.6"></diffbox>

Converting to Bootstrap doesn't stop here. By applying bootstrap styles to various other parts of our Socially app, our website will look better on different screens. Have a look at [Code Diff](https://github.com/Urigo/meteor-angular-socially/compare/step_16...step_17) to see how we changed the structure of the main files.

Now we can create .less file for Socially:

<diffbox tutorial="angular1-meteor-socially" step="17.7"></diffbox>

And apply it to main less file:

<diffbox tutorial="angular1-meteor-socially" step="17.5"></diffbox>

To make bootstrap working with all sizes of screens:

<diffbox tutorial="angular1-meteor-socially" step="17.8"></diffbox>

# Navigation

Move loginButtons under Navigation and set as a bootstrap's navbar:

<diffbox tutorial="angular1-meteor-socially" step="17.9"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.10"></diffbox>

# PartiesList

We will use bootstrap's grid system and make all warnings look a lot better:

<diffbox tutorial="angular1-meteor-socially" step="17.11"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.12"></diffbox>

We will no longer be using PartyUnanswered, time to remove it:

<diffbox tutorial="angular1-meteor-socially" step="17.42"></diffbox>

# PartyAdd

Let's use .form-group and .form-control classes:

<diffbox tutorial="angular1-meteor-socially" step="17.13"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.14"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.15"></diffbox>

# PartiesMap

<diffbox tutorial="angular1-meteor-socially" step="17.16"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.17"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.18"></diffbox>


# PartiesSort

<diffbox tutorial="angular1-meteor-socially" step="17.19"></diffbox>

# PartyCreator

Let's add a icon:

<diffbox tutorial="angular1-meteor-socially" step="17.20"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.21"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.22"></diffbox>

# PartyRemove

We will use icon of X provided by bootstrap v4:

<diffbox tutorial="angular1-meteor-socially" step="17.23"></diffbox>

# PartyRsvp

Let's make RSVP a lot prettier! User will be able to see how he responded:

<diffbox tutorial="angular1-meteor-socially" step="17.24"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.25"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.26"></diffbox>

And create few methods to check the answer:

<diffbox tutorial="angular1-meteor-socially" step="17.39"></diffbox>

# PartyRsvpsList

We will no longer use PartyRsvpUsers, so we can remove it:

<diffbox tutorial="angular1-meteor-socially" step="17.43"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.27"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.28"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.29"></diffbox>

# PartyUninvited

<diffbox tutorial="angular1-meteor-socially" step="17.30"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.31"></diffbox>

# PartyDetails

Let's do pretty much the same as we did with PartyAdd and PartyDetails:

<diffbox tutorial="angular1-meteor-socially" step="17.32"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.33"></diffbox>

# PartyMap

We will remove partyMap.css and replace it with partyMap.less:

<diffbox tutorial="angular1-meteor-socially" step="17.34"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.35"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="17.37"></diffbox>

# Update Socially

Now we can import all less files of direct Socially dependencies:

<diffbox tutorial="angular1-meteor-socially" step="17.38"></diffbox>

That's it! Now we have a nice style with a better looking CSS using Bootstrap and LESS!

# Summary

We learned how to use CSS, LESS and Bootstrap in Meteor.
