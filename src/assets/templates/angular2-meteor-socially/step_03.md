Now we have a client side application that creates and renders its own data.

So, if we were in any framework other than Meteor, we would likely start implementing a series of REST endpoints to connect the server to the client.
We would also need to create a database and functions to connect to it.

And we haven't even talked about real-time, in which case we would need to add sockets, a local DB for cache and handle latency compensation (or just ignore those features and create a not-so-good or less modern app...)

But luckily, we use Meteor!

# Data Model and Reactivity in Meteor

Meteor makes writing distributed client code as simple as talking to a local database.

Every Meteor client includes an in-memory database cache. To manage the client cache, the server publishes sets of JSON documents, and the client subscribes to these sets. As documents in a set change, the server patches each client's cache automatically.

That introduces us to a new concept — *Full Stack Reactivity*.

In an Angular-ish language we might call it *3 way data binding*.

The way to handle data in Meteor is through the [`Mongo.Collection`](http://docs.meteor.com/#/full/mongo_collection) class. It is used to declare MongoDB collections and manipulate them.

Thanks to [Minimongo](https://atmospherejs.com/meteor/minimongo), Meteor's client-side Mongo emulator, `Mongo.Collection` can be used from both client and server code.

In short, Meteor core's setup has:

- real-time reactivity through web sockets
- two databases. One on the client for fast changes, another behind the server for official changes
- a special protocol (called DDP) that synchronizes data between two databases
- a bunch of small things that make creating an app with Meteor easier and more developer friendly!

# Declare a Collection

So first, let's define our first parties collection that will store all our parties.

In a separate folder called `collections`, add a file called `parties.ts`:

<diffbox tutorial="angular2-meteor-socially" step="3.1"></diffbox>

We've just created a file called `parties.ts`, that contains a CommonJS module called `collections/parties`. 
This work is done by the TypeScript compiler behind the scenes.

The TypeScript compiler converts `.ts` files to ES5, then registers a CommonJS module with the same name as
the relative path to the file in the app.

That's why we use the special word `export`. We are telling CommonJS what we are allowing the object to be exported from this module into the outside world.

Meteor has a series of special folder names, including the `client` folder. All files within a folder named `client` are loaded on the client only. Likewise, files in a folder called `server` are loaded on the server only.

Placing the `collection` folder outside of any special folder, makes its contents available to both the client and the server. Therefore, the `parties` collection (and the actions on it) will run on both the client (minimongo) and the server (Mongo).

Though we only declared our model once, we have two modules that declare two versions of our parties collection:
one for client-side and one for server-side. This is often referred to as "isomorphic" or "universal javascript". All synchronization between these two versions of collections is handled by Meteor.

# Binding Meteor to Angular

Now that we've created the collection, our client needs to subscribe to it's changes and bind it to our `this.parties` array.

In order to make Angular understand Meteor collection, `angular2-meteor` includes providers.

Adding those providers to each component is annoying so we've added a new `bootstrap` that overrides the basic bootstrap method from `@angular/platform-browser-dynamic` and adds some those additional providers to your app.

To use it, we need to install it from NPM:

    meteor npm install angular2-meteor-auto-bootstrap --save

Let's change `bootstrap` to load from `angular2-meteor-auto-bootstrap` instead of `@angular/platform-browser-dynamic` as follows:

<diffbox tutorial="angular2-meteor-socially" step="3.4"></diffbox>
    
Now let's import the `Parties` from collections:

<diffbox tutorial="angular2-meteor-socially" step="3.2"></diffbox>

and let's bind to the Cursor:

<diffbox tutorial="angular2-meteor-socially" step="3.5"></diffbox>


# Inserting Parties from the Console

At this point we've implemented a rendering of a list of parties on the page.
Now it's time to check if the code above really works; it shouldn't just render that list, but also render all
changes to the database on the page reactively.

In Mongo terminology, items inside collections are called documents. So, let's insert some documents into our collection by using the server database console.

In a new terminal tab, go to your app directory and type:

    meteor mongo

This opens a console into your app's local development database using [Mongo shell](https://docs.mongodb.org/manual/reference/mongo-shell/). At the prompt, type:

    db.parties.insert({ name: "A new party", description: "From the mongo console!", location: "In the DB" });

In your web browser, you will see the UI of your app immediately update to show the new party.
You can see that we didn't have to write any code to connect the server-side database to our front-end code — it just happened automatically.

Insert a few more parties from the database console with different text.

Now let's do the same but with "remove". At the prompt, type the following command to look at all the parties and their properties:

    db.parties.find({});

Choose one party you want to remove and copy its 'id' property.
Then, remove it using that id (replace 'N4KzMEvtm4dYvk2TF' with your party's id value):

    db.parties.remove({"_id": ObjectId("N4KzMEvtm4dYvk2TF")});

Again, you will see the UI of your app immediately updates with that party removed.

Feel free to try running more actions like updating an object from the console, and so on.

# Initializing Data on Server Side

Until now we've been inserting party documents to our collection using the Mongo console.
It would be convenient though to have some initial data pre-loaded into our database. So,
let's initialize our server with the same parties as we had before.

Let's add a file called `load-parties.ts` inside of "server" folder
and implement `loadParties` method inside to load parties:

<diffbox tutorial="angular2-meteor-socially" step="3.7"></diffbox>

Then create `main.ts` to run this method on Meteor startup:

<diffbox tutorial="angular2-meteor-socially" step="3.9"></diffbox>

Now run the app and you should see the list of parties on the screen.
If not, please, run

    meteor reset

in order to remove all previous parties added before via the terminal.

In the next step, we'll see how to add functionality to our app's UI so that we can add parties on the page.

# Summary

In this chapter you saw how easy and fast it is:

- to create a full connection between our client data and the server using Meteor
- to create a simple Angular 2 UI and render a Mongo collection on the page with the help of `Angular2-Meteor`
- to load initial parties on the server side when the app launches
