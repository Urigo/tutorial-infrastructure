On this step we will authenticate and identify users in our app.

Before we go ahead and start extending our app, we will add few packages which will make our lives a bit less complex when it comes to authentication and users management.

Firt we will update our `api` and add a meteor package called `accounts-phone` which gives us the ability to verify a user using an SMS code:

    $ meteor add okland:accounts-phone

And second, we will update the client, and add authentication packages to it. We will add `accounts-phone` which is the same package we installed in our `api`, only this time it's for the client, and `angular-meteor-auth` which is an extension for `Angular` based on `angular-meteor`, and it contains different utility functions to help us implement authentication.

In terminal, type:

    $ bower install accounts-phone --save
    $ bower install angular-meteor --save

And import them in our `index.js`:

<diffbox tutorial="ionic-tutorial" step="5.3"></diffbox>

And since `angular-meteor-auth` is an `Angular` extension we will need to add it as a module dependency in our app:

<diffbox tutorial="ionic-tutorial" step="5.4"></diffbox>

Inorder to make the SMS verification work we will need to create a file locaed in `api/server/sms.js` with the following contents:

<diffbox tutorial="ionic-tutorial" step="5.5"></diffbox>

If you would like to test the verification with a real phone number, `accouts-phone` provides an easy access for [twilio's API](https://www.twilio.com/), for more information see [accounts-phone's repo](https://github.com/okland/accounts-phone).

For debugging purposes if you'd like to add admin phone numbers and mater verification codes which will always pass the verification stage, you may add a `settings.json` file at the root folder with the following fields:

    {
      "ACCOUNTS_PHONE": {
        "ADMIN_NUMBERS": ["123456789", "987654321"],
        "MASTER_CODE": "1234"
      }
    }

We're going to create the same flow of `Whatsapp` for authentication using 3 views:

- `Login` - Asks for the user's phone number.
- `Confirmation` - Verifies a user's phone number by an SMS authentication.
- `Profile` - Asks a user to pickup its name.

Before we jump into implementing them, we will add a pre-requirement to the relevant routes which require the user to log-in first. `angular-meteor-auth` provides us with a service which is called `$auth`, and it has a method called `$awaitUser()` which returns a promise that will be resolved only once the user has logged in. For more information about `angular-meteor-auth` see [reference](http://www.angular-meteor.com/api/1.3.6/auth).

<diffbox tutorial="ionic-tutorial" step="5.6"></diffbox>

And now we want to handle a case where this promise does not resolve (In case the user is not logged in), so let’s create new `RouteConfig` that uses `Angular`'s config phase:

<diffbox tutorial="ionic-tutorial" step="5.7"></diffbox>

<diffbox tutorial="ionic-tutorial" step="5.8"></diffbox>

Cool, now that we're set, let's start implementing the views we mentioned earlier. We will start with the login view.

The login view contains an input and a save button, and after the save button has been saved, we should be forwarded to the confirmation view, right after an SMS has been sent to the entered phone number:

<diffbox tutorial="ionic-tutorial" step="5.9"></diffbox>

And for the controller - the logic is simple. We ask the user to check again his phone number, and then we will use `accounts` API in order to ask for SMS verification:

<diffbox tutorial="ionic-tutorial" step="5.10"></diffbox>

<diffbox tutorial="ionic-tutorial" step="5.11"></diffbox>

Let's add its route state:

<diffbox tutorial="ionic-tutorial" step="5.12"></diffbox>

And some style:

<diffbox tutorial="ionic-tutorial" step="5.13"></diffbox>

<diffbox tutorial="ionic-tutorial" step="5.14"></diffbox>

Up next, would be the confirmation view.

We will use `accounts` API again to verify the user and in case of successful authentication we will transition to the profile view. The same routine of implementation goes on.

Template:

<diffbox tutorial="ionic-tutorial" step="5.15"></diffbox>

Controller:

<diffbox tutorial="ionic-tutorial" step="5.16"></diffbox>

<diffbox tutorial="ionic-tutorial" step="5.17"></diffbox>

And a route state:

<diffbox tutorial="ionic-tutorial" step="5.18"></diffbox>

Let's proceed to the last view in the authentication flow. The `Profile` view provides the ability to enter the user's nickname and profile picture (Which, unfortunately, is not implemented in this tutorial yet).

Template:

<diffbox tutorial="ionic-tutorial" step="5.19"></diffbox>

Controller:

<diffbox tutorial="ionic-tutorial" step="5.20"></diffbox>

<diffbox tutorial="ionic-tutorial" step="5.21"></diffbox>

Route state:

<diffbox tutorial="ionic-tutorial" step="5.22"></diffbox>

Style:

<diffbox tutorial="ionic-tutorial" step="5.23"></diffbox>

<diffbox tutorial="ionic-tutorial" step="5.24"></diffbox>

The authentication flow is complete. Now once we start our application for the first time this is what we should see:

![angular1-wa-ionic-cli](/assets/tutorials/angular1-whatsapp-ionic-cli/7.png)

If you will take a look at step 5.20, the `ProfileCtrl` uses a server method called `updateName` which is yet to be implemented. Let's implement it in our `api`:

<diffbox tutorial="ionic-tutorial" step="5.25"></diffbox>

`Meteor` sets `this.userId` to contain some information about the current logged in user, so by checking for this variable's existence we know if there is a user logged in or not.

Now let's add this validation to the `newMessage()` method we've just created, and attach the user's id to each message he sends:

<diffbox tutorial="ionic-tutorial" step="5.26"></diffbox>

Great, now the last missing feature is logout. Let’s add the settings view which contains the logout button:

<diffbox tutorial="ionic-tutorial" step="5.27"></diffbox>

Let's implement the `SettingsCtrl` containing the logic for logging out:

<diffbox tutorial="ionic-tutorial" step="5.28"></diffbox>

<diffbox tutorial="ionic-tutorial" step="5.29"></diffbox>

And to make things work, we need to add the appropriate route state:

<diffbox tutorial="ionic-tutorial" step="5.30"></diffbox>

And this is how our settings page should look like:

Now anytime we press the settings button, we should be navigating to the settings page:

![angular1-wa-ionic-cli](/assets/tutorials/angular1-whatsapp-ionic-cli/8.png)

So far our messages were identified by their index, meaning that even messages will be mine, and odd messages would be other's:

![angular1-wa-ionic-cli](/assets/tutorials/angular1-whatsapp-ionic-cli/9.png)

Now that we have our user id bounded to each message, we can determine the real ownership of each message. So, let's update our chat view accordingly:

<diffbox tutorial="ionic-tutorial" step="5.31"></diffbox>

Great! Everything works well now, but let's take our chatting experience one step further. Let's add an auto-scrolling feature, so our conversation would look more fluent and we won't have to scroll down any time our chat space is full:

<diffbox tutorial="ionic-tutorial" step="5.32"></diffbox>