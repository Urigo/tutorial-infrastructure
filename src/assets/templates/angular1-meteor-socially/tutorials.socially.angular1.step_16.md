Let's add location to our parties.

The most popular maps widget is Google Maps so let's use that.

First, let's add the angular-google-maps Meteor package:

    meteor npm install --save angular-google-maps

We also have to install another package:

    meteor npm install --save angular-simple-logger

Then let's create a `PartyMap` component:

<diffbox tutorial="angular1-meteor-socially" step="16.3"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="16.4"></diffbox>

Here we created the google-map directive with attributes for binding the center, handling events and zoom of the map.
We created the `this.map` variable to hold the properties on the map.

To display a Google Map widget we have to define it's height and width. Let's do that now.
Create a new file named `partyMap.css` inside a the same folder as the component.

<diffbox tutorial="angular1-meteor-socially" step="16.5"></diffbox>

We still have to import this file:

<diffbox tutorial="angular1-meteor-socially" step="16.6"></diffbox>

Now we have to add it to the PartyDetails:

<diffbox tutorial="angular1-meteor-socially" step="16.7"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="16.8"></diffbox>

Now run the app and go to the party details page. You should see a new Google Map widget, but it doesn't do anything yet.

Let's add a marker that will be bound to the party's location.

Inside `PartyMap` template:

<diffbox tutorial="angular1-meteor-socially" step="16.3"></diffbox>

The `ui-gmap-marker` directive represents a marker inside the map. We use the following attributes:

* coords - where is the scope the marker location will be bound to.
* options - object that holds the marker options. We are going to use the draggable option.
* events - handling the events on the marker. We will use the click event.
* idKey - where in the scope there exists the unique id of the object that the marker represent.

We already extended `this.map` variable to include handling those options.

Inside `PartyMap` component:

<diffbox tutorial="angular1-meteor-socially" step="16.9"></diffbox>

What happened here:

* We created method to set a new value of location binding.
* We added the click event to the map. Every time the user clicks the map, we take the location from the click event's params and save it as the party's new location.
* We defined the options object under the marker to specify the marker is draggable.
* We handled the dragend event that happens when the marker is dropped to a new location. We take the location from the event's params and save it as the party's new location.

Now is the time to use it in the PartyDetails.

Insert `location` value:

<diffbox tutorial="angular1-meteor-socially" step="16.10"></diffbox>

Again, with the great Meteor platform there is no need for sync or save function. We just set it and it syncs in all other clients.

Test it to see clicking and dragging works.

# Multiple markers

Now let's add a map to the parties list to show all the parties on the map.

So let's create the `PartiesMap` component:

<diffbox tutorial="angular1-meteor-socially" step="16.11"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="16.12"></diffbox>

You can see that the difference between the directive we used in `PartyMap` is that `ui-gmap-markers` is plural.

The attributes we use:

* models - the scope array that the markers represent.
* coords - the property that holds the location.
* click - handler for the click event on a marker
* fit - a boolean to automatically zoom the map to fit all the markers inside
* idKey - the property that holds the unique id of the array
* doRebuildAll - a refresh option, will help us to refresh the markers in search

And use it in the `PartiesList`:

<diffbox tutorial="angular1-meteor-socially" step="16.13"></diffbox>

<diffbox tutorial="angular1-meteor-socially" step="16.14"></diffbox>

# Summary

Run the app.  Look at how little code we needed to add maps support to our app.

Angular 1 has a huge eco system full of great directives like the angular-google-maps one.
