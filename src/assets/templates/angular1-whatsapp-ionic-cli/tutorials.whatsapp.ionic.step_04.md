In this step we will add the chat view and the ability to send messages.

We still don’t have an identity for each user, we will add it later, but we can still send messages to existing chats.

So just like any other page, let’s begin by adding a very basic view with the chat's details:

<diffbox tutorial="ionic-tutorial" step="4.1"></diffbox>

Now we need to implement the logic in the controller, so let’s create it:

<diffbox tutorial="ionic-tutorial" step="4.2"></diffbox>

<diffbox tutorial="ionic-tutorial" step="4.3"></diffbox>

We used the `$statePrams` provider to get the id of the chat, and then we used the `Chats` collection to find the data related to the it. The function `findOne()` takes a query as a parameter and returns a single document. Just like collections in `MongoDB`.

Now that we have the view and the controller let's connect them by adding the appropriate route state:

<diffbox tutorial="ionic-tutorial" step="4.4"></diffbox>

And all is left to do is to link these two:

<diffbox tutorial="ionic-tutorial" step="4.5"></diffbox>

Now each time we will click on a chat item from the menu, we should be navigating to it.

Let’s create a new `scss` file to our `Chat` and fix the image style so it won't look silly:

<diffbox tutorial="ionic-tutorial" step="4.6"></diffbox>

<diffbox tutorial="ionic-tutorial" step="4.7"></diffbox>

Our next step is about getting the chat messages on the controller, we will add another helper, but instead of using the whole collection we will fetch only the relevant messages for the current chat:

<diffbox tutorial="ionic-tutorial" step="4.8"></diffbox>

And now to add it to the view, we use `ng-repeat` to iterate the messages:

<diffbox tutorial="ionic-tutorial" step="4.9"></diffbox>

Now that it is well functioning, let's polish our `Chats`'s looking by adding some style to our newly created messages:

<diffbox tutorial="ionic-tutorial" step="4.10"></diffbox>

Also, this stylesheet uses some assets located in the `www/img` dir, so inorder for the stylesheet to work properly you'll need to copy the files located [here](https://github.com/DAB0mB/ionic-meteor-whatsapp/tree/master/www/img).

After doing so, our app should look like this:

![angular1-wa-ionic-cli](/assets/tutorials/angular1-whatsapp-ionic-cli/4.png)

Now we just need to take care of the message timestamp and format it.

We will use `Moment` like before, but now let's add another package called [angular-moment](https://github.com/urish/angular-moment) that provides us the UI filters.

So adding the package is just like any other package we added so far. First, we will install it:

    $ bower install angular-moment --save

<diffbox tutorial="ionic-tutorial" step="4.12"></diffbox>

And then we will load it:

<diffbox tutorial="ionic-tutorial" step="4.13"></diffbox>

<diffbox tutorial="ionic-tutorial" step="4.14"></diffbox>

> *NOTE*: Because it’s an `Angular` extension, we loaded its dependency in our module definition.

Now that we have `angular-moment` ready to use, we will use a filter provided by it in our view:

<diffbox tutorial="ionic-tutorial" step="4.15"></diffbox>

Our messages are set, but there is one really important feature missing and that's sending messages. Let's implement our message editor.

We will start with the view itself. We will add an input for editing our messages, a `send` button and some icons for sending images and sound recordings, whom logic won't be implemented in this tutorial since we only wanna focus on the messaging system.

The `ionic-footer-bar` directive provides a perfect solution for placing stuff under our content, let's use it:

<diffbox tutorial="ionic-tutorial" step="4.16"></diffbox>

To improve the user experience in our app, we want some extra events to our input because we want to move it up when the keyboard comes from the bottom of the screen and we want to know if `return` (aka `Enter`) was pressed.

We will implement a new directive that extends the regular `input` tag and add those events to the directive:

<diffbox tutorial="ionic-tutorial" step="4.17"></diffbox>

<diffbox tutorial="ionic-tutorial" step="4.18"></diffbox>

And now we can use those events in our view:

<diffbox tutorial="ionic-tutorial" step="4.19"></diffbox>

And implement the controller methods which handle those events:

<diffbox tutorial="ionic-tutorial" step="4.20"></diffbox>

We will also add some `css` to this view:

<diffbox tutorial="ionic-tutorial" step="4.21"></diffbox>

So now when the user focuses on the input, it should pop up.

This is what we got so far:

![angular1-wa-ionic-cli](/assets/tutorials/angular1-whatsapp-ionic-cli/5.png)

So now it’s time to implement the `sendMessage()` in our controller, which is responsible for the logic of sending a message.

We will use `Scope.callMethod()` in order to call that method on the server side:

<diffbox tutorial="ionic-tutorial" step="4.22"></diffbox>

Now let’s create our `api` method in a file called `methods.js`:

<diffbox tutorial="ionic-tutorial" step="4.23"></diffbox>

And we also need to load them in our client, since they are called twice, once in our client (As a validation and smoother experience without refreshing) and once in our server (For security and data handling):

<diffbox tutorial="ionic-tutorial" step="4.24"></diffbox>

We would also like to validate some data sent to methods we define. `Meteor` provides us with a useful package named `check` that validates data types and scheme.

We will add it to our server using the following commands:

    $ cd api
    $ meteor add check

> *NOTE*: `meteor-client-side` is already provided with the `check` package so no need to require it again.

Now let’s use it in the `newMessage()` method:

<diffbox tutorial="ionic-tutorial" step="4.26"></diffbox>

Now that it's ready you can go ahead and send a message and view it on the screen. It should look like this:

![angular1-wa-ionic-cli](/assets/tutorials/angular1-whatsapp-ionic-cli/6.png)
