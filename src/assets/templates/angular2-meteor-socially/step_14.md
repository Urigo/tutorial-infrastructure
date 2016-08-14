In this step we will learn how to use Meteor Methods to
implement server side logic of the party invitation feature.

> A capital "M" will be used with Meteor "M"ethods to avoid confusion with Javascript function methods

Meteor Methods are a more secure and reliable way to
implement complex logic on the server side in comparison to the direct
manipulations of Mongo collections. Also, we'll touch briefly on
Meteor's UI latency compensation mechanism that comes with these Methods.
This is one of the great Meteor concepts that allows for rapid UI changes.

# Invitation Method

Let's create a new file `collections/methods.ts`, and add the following `invite` Meteor Method:

<diffbox tutorial="angular2-meteor-socially" step="14.0"></diffbox>

We used a special API method `Meteor.methods` to register
a new Meteor Method. Again, don't forget to import your created `methods.ts` module
in the server's `main.ts` module to have the Methods defined properly:

<diffbox tutorial="angular2-meteor-socially" step="14.2"></diffbox>

### Latency Compensation

UI Latency compensation is one of the features that makes Meteor stand out amongst most other Web frameworks, thanks again to the isomorphic environment and Meteor Methods.
In short, visual changes are applied immediately as a response to some user action,
even before the server responds to anything. If you want to read up more about how the view can securely be updated
even before the server is contacted proceed to an [Introduction to Latency Compensation](https://meteorhacks.com/introduction-to-latency-compensation) written by Arunoda.

But to make it happen, we need to define our Methods on the client side as well. Let's import our Methods in `client/app.ts`:

<diffbox tutorial="angular2-meteor-socially" step="14.3"></diffbox>

### Validating Methods with Check

As you can see, we've also done a lot of checks to verify that
all arguments passed down to the method are valid.

First the validity of the arguments' types are checked, and then
the business logic associated with them is checked.

Type validation checks, which are essential for the JavaScript methods dealing with the storage's data,
are done with the help of a handy Meteor's package called ["check"](https://atmospherejs.com/meteor/check).

    meteor add check

Then, if everything is valid, we send an invitation email.
Here we are using another handy Meteor's package titled ["email"](https://atmospherejs.com/meteor/email).

    meteor add email

At this point, we are ready to add a call to the new Method from the client.

Let's add a new button right after each username or email in that
list of users to invite in the `PartyDetails`'s template:

<diffbox tutorial="angular2-meteor-socially" step="14.4"></diffbox>

And then, change the component to handle the click event and invite a user:

<diffbox tutorial="angular2-meteor-socially" step="14.5"></diffbox>

### Updating Invited Users Reactively

One more thing before we are done with the party owner's invitation
logic. We, of course, would like to make this list of users
change reactively, i.e. each user disappears from the list
when the invitation has been sent successfully.

It's worth mentioning that each party should change appropriately
when we invite a user — the party `invited` array should update
in the local Mongo storage. If we wrap the line where
we get the new party with the `autorun` method, this code should
re-run reactively:

<diffbox tutorial="angular2-meteor-socially" step="14.6"></diffbox>

Now its time to update our users list.
We'll move the line that gets the users list into a
separate method, provided with the list of IDs of already invited users;
and call it whenever we need: right in the above `autorun` method after the party assignment and in the subscription, like that:

<diffbox tutorial="angular2-meteor-socially" step="14.7"></diffbox>

Here comes test time. Let's add a couple of new users.
Then login as an old user and add a new party.
Go to the party: you should see a list of all users including
newly created ones. Invite several of them — each item in the list
should disappear after a successful invitation.

What's important to notice here is that each user item in the users list
disappears right after the click, even before the message about
the invitation was successfully sent. That's the latency compensation at work!

# User Reply

Here we are going to implement the user reply to the party invitation request.

First of all, let's make parties list a bit more secure,
which means two things: showing private parties to those who have been invited
or to owners, and elaborate routing activation defense for the party details view:

<diffbox tutorial="angular2-meteor-socially" step="14.8"></diffbox>

The next thing is a party invitee response to the invitation itself. Here, as usual,
we'll need to update the server side and UI. For the server,
let's add a new `reply` Meteor Method:

<diffbox tutorial="angular2-meteor-socially" step="14.9"></diffbox>

As you can see, a new property, called "rsvp", was added
above to collect user responses of this particular party.
One more thing. Let's update the party declaration file to
make TypeScript resolve and compile with no warnings:

<diffbox tutorial="angular2-meteor-socially" step="14.10"></diffbox>

For the UI, let's add three new buttons onto the party details view.
These will be "yes", "no", "maybe" buttons and users responses accordingly:

<diffbox tutorial="angular2-meteor-socially" step="14.11"></diffbox>

Then, handle click events in the PartyDetails component:

<diffbox tutorial="angular2-meteor-socially" step="14.12"></diffbox>

### Rsvp Pipe

Last, but not the least, let's show statistics of the invitation responses for the party owner.
Let's imagine that any party owner
would like to know the total number of those who declined, accepted, or remain tentative.
This is a perfect use case to add a new stateful pipe, which takes as
an input a party and a one of the RSVP responses, and calculates the total number of responses
associated with this, provided as a parameter we'll call "response".

Add a new pipe to the `lib/pipes.ts` as follows:

<diffbox tutorial="angular2-meteor-socially" step="14.13"></diffbox>

Let's take a look at our 'rsvp' pipe closely. The pipe extends `MeteorComponent` and
uses its `autorun` method to watch for the party's updates.
Whenever the party's `rsvp` array changes, new numbers will be
displayed as required. That's the reason why this pipe is considered stateful:
it not only transforms one value to another, but also subscribes to the updates.

You may have noticed as well, that the new property `pure` is set to true
in the `@Pipe` decorator, which tells Angular 2's check detection
system to check this pipe on changes as well, i.e., in the same way as any other
component.

It's also worth mentioning that the arguments of a Pipe implementation inside a template are passed to the `transform` method in the same form. Only difference is that the first argument of `transform` is a value to be transformed. In our case, passed only the RSVP response, hence, we are taking the first
value in the list.

An example:

```js
// usage: text | subStr:20:50
@Pipe({name: 'subStr'})
class SubStrPipe {
  transform(text: string, starts: number, ends: number) {
    return text.substring(starts, ends);
  }
}
```

Let's make use of this pipe in the `PartiesList` component:

<diffbox tutorial="angular2-meteor-socially" step="14.14"></diffbox>

And then in the component itself:

<diffbox tutorial="angular2-meteor-socially" step="14.15"></diffbox>

Now it's testing time! Check that an invited user is able to reply to an
invitation, and also verify that the party's statistics update properly and reactively.
Login as an existing user. Add a new party, go to the party and
invite some other users. Then, open a new browser window in the anonymous mode along with the current window,
and login as the invited user there. Go to the party details page, and reply, say, "no";
the party's statistics on the first page with the parties list should duly update.

# Challenge

There is one important thing that we missed. Besides the party invitation
statistics, each user would like to know if she has already responded, in case she forgot,
to a particular invitation. This step's challenge will be to add this status
information onto the PartyDetails's view and make it update reactively.

> Hint: In order to make it reactive, you'll need to add one more handler into
> the party `autorun`, like the `getUsers` method in the this step above.

# Summary

We've just finished the invitation feature in this step, having added bunch of new stuff.
Socially is looking much more mature with Meteor Methods on board. We can give ourselves
a big thumbs-up for that!

Though, some places in the app can certainly be improved. For example,
we still show some private information to all invited users, which should be designated only for the party owner.
We'll fix this in the next step.
