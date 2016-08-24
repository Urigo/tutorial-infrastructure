On this step we will authenticate and identify users in our app.

Before we go ahead and start extending our app, we will add few packages which will make our lives a bit less complex when it comes to authentication and users management.

First we will add a `Meteor` package called `accounts-phone` which gives us the ability to verify a user using an SMS code:

    $ meteor add okland:accounts-phone

And second, we will add `angular-meteor-auth` which provides us with authentication related functions:

    $ meteor npm install angular-meteor-auth

Of course, don't forget to load the relevant modules:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.3"></diffbox>

In order to make the SMS verification work we will need to create a file located in `server/sms.js` with the following contents:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.4"></diffbox>

If you would like to test the verification with a real phone number, `accouts-phone` provides an easy access for [twilio's API](https://www.twilio.com/), for more information see [accounts-phone's repo](https://github.com/okland/accounts-phone).

For debugging purposes if you'd like to add admin phone numbers and mater verification codes which will always pass the verification stage, you may add a `settings.json` file at the root folder with the following fields:

    {
      "ACCOUNTS_PHONE": {
        "ADMIN_NUMBERS": ["123456789", "987654321"],
        "MASTER_CODE": "1234"
      }
    }

Now let's create the same flow of `Whatsapp` for authentication: first we need to ask for the user's phone number, verify it with an SMS message and then ask the user to pick his name.

So these flows are created by 3 views: login, confirmation and profile.

Let's add these states, each with HTML template and controller:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.5"></diffbox>

We will now add the view of login state which includes an input and a save button and later we will add a modal dialog to verify the user's phone:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.6"></diffbox>

And for the controller the logic is simple, we ask the user to check again his phone number, and then we will use `Accounts` API in order to ask for SMS verification:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.7"></diffbox>

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.8"></diffbox>

Note that we didn't provide all the settings for `account-phone`, so it will run in debug mode. It means that a real SMS won't be sent now, but if you'd like to receive the verification code just open your terminal and view `Meteor`'s logs.

Our next step would be preventing unauthorized users from viewing contents which they have no permission to. In order to do that we will add a pre-requirement to the relevant routes which will require the user to log-in first. `angular-meteor-auth` provides us with a service which is called `$auth`, and it has a method called `$awaitUser()` which returns a promise that will be resolved only once the user has logged in. For more information about `angular-meteor-auth` see [reference](http://www.angular-meteor.com/api/1.3.6/auth).

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.9"></diffbox>

And now we want to handle a case that this promise does not resolve (In case that the user is not logged in), so let's create a new run block to our `routes.js` file:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.10"></diffbox>

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.11"></diffbox>

And now let's add some `css`:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.12"></diffbox>

And this is how it looks like:

![angular1-wa-meteor-cli](/assets/tutorials/angular1-whatsapp-meteor-cli/13.png)

The next step is to add the confirmation view, starting with the HTML:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.13"></diffbox>

And the controller:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.14"></diffbox>

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.15"></diffbox>

We will use `Accounts` API again to verify the user and in case of successful authentication we will transition to the `profile` state, which we will add in the next step.

Let's implement the profile view, which provides the ability to enter the user's nickname and profile picture:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.16"></diffbox>

And the controller:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.17"></diffbox>

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.18"></diffbox>

And some `css`:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.19"></diffbox>

As you can see, the controller uses the server method `updateName()` which we need to implement in the `lib/methods.js`:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.20"></diffbox>

`Meteor` sets the user identity in case of a logged in user into the `this.userId` variable, so we can check if this variable exists in order to verify that the user is logged in.

Now let's add this validation to the `newMessage()` method we created earlier, and also add the identity of the user to each message he sends.

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.21"></diffbox>

Great, now the last missing feature is logout. Let's add a state for the settings view:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.22"></diffbox>

And create the view which contains the logout button:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.23"></diffbox>

Now let's implement this method inside the `SettingsCtrl`:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.24"></diffbox>

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.25"></diffbox>

And this is our settings view:

![angular1-wa-meteor-cli](/assets/tutorials/angular1-whatsapp-meteor-cli/14.png)

We also need to modify the way we identify our users inside the messages list, so let's do it:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.26"></diffbox>

And the last missing feature is about adding auto-scroll to the messages list in order to keep the view scrolled down when new messages arrive:

<diffbox tutorial="whatsapp-meteor-tutorial" step="4.27"></diffbox>
