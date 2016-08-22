Angular 1 has great and very simple directives that help us show and hide DOM elements conditionally.
You can bind them to an expression, variables or functions.

# ng-show and ng-hide

First, let's learn about [ng-show](https://docs.angularjs.org/api/ng/directive/ngShow) and [ng-hide](https://docs.angularjs.org/api/ng/directive/ngHide).

So one thing we want to hide and show is the form for creating a new party. If a user is not logged in, they can't create a party, so why displaying the form for them?
If the user is not logged in, we want to display a message saying they need to log in to create a new party.

In `PartiesList` add a `ng-show` directive to the PartyAdd like that:

<diffbox tutorial="angular1-meteor-socially" step="15.1"></diffbox>

Now, we need to add the ability to detect if there is a user logged in at the moment, so let's add a helper for that:

<diffbox tutorial="angular1-meteor-socially" step="15.2"></diffbox>

Then right after the form, add this HTML:

<diffbox tutorial="angular1-meteor-socially" step="15.3"></diffbox>

That is exactly the opposite - if `isLoggedIn` is true or we're in the processing of logging in, hide that div.

Now add the same to the PartyRsvp:

<diffbox tutorial="angular1-meteor-socially" step="15.4"></diffbox>

Add let's add this after the RSVP buttons:

<diffbox tutorial="angular1-meteor-socially" step="15.5"></diffbox>

Next thing we want to hide is the 'delete party' option, in case the logged-in user is not the party's owner.

Lets add ng-show to the delete button like that:

<diffbox tutorial="angular1-meteor-socially" step="15.7"></diffbox>

In here you can see that `ng-show` can get a statement, in our case - the user exists (logged in) and is also the party's owner.

But we just missing the helper we used:

<diffbox tutorial="angular1-meteor-socially" step="15.6"></diffbox>

# ng-if

[ng-if](https://docs.angularjs.org/api/ng/directive/ngIf) acts almost the same as `ng-show` but the difference between them
is that `ng-show` hides the element by changing the display css property and `ng-if` simply removes it from the DOM completely.

So let's use `ng-if` to hide the outstanding invitations from a party, if the party is public (everyone is invited!):

<diffbox tutorial="angular1-meteor-socially" step="15.8"></diffbox>

# Assigning a function

Now lets hide the 'PartyUninvited' inside `PartyDetails` in case the user is not logged in or can't invite to the party:

To do that we will create a scope function that returns a boolean and associate it with `ng-show`:

Create a new function inside `partyDetails` component, called `canInvite`:

<diffbox tutorial="angular1-meteor-socially" step="15.9"></diffbox>

and add the `ng-show` to the `PartyUninvited`:

<diffbox tutorial="angular1-meteor-socially" step="15.10"></diffbox>

Let's add a `li` that tells the user that everyone is already invited, if that is the case

<diffbox tutorial="angular1-meteor-socially" step="15.11"></diffbox>

Here, we are taking the result of the uninvited users and checking for its length.

But we are just missing the helpers in this component, so let's add it here as well:

<diffbox tutorial="angular1-meteor-socially" step="15.12"></diffbox>


# ng-disabled

Now lets disable the `PartyDetails` input fields in case the user doesn't have permission to change them (currently, the server is stopping the user, but there is no visual feedback aside from the server overriding the local edit immediately after):

<diffbox tutorial="angular1-meteor-socially" step="15.13"></diffbox>

# Summary

So now our example looks much better after we hide things based on the current situation.

In the next chapters we will add Google Maps and some CSS and styling to our app.
