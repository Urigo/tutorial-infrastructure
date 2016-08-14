This step of the tutorial teaches us how to add mobile support for iOS and Android and how to elegantly reuse code using the es2015 modules.

In this tutorial's example we will differentiate the login part of the project: in the browser users will login using email and password and in the mobile app users will login with SMS verification.

### Adding mobile support for the project:

To add mobile support, select the platform(s) you want and run the following command:

    $ meteor add-platform ios
    # OR / AND
    $ meteor add-platform android

And now to run in the emulator, run:

    $ meteor run ios
    # OR
    $ meteor run android

You can also run in a real mobile device, for more instructions, read the ["Mobile" chapter](http://guide.meteor.com/mobile.html) of the Official Meteor Guide.

### Creating es2015 modules

We're going to keep the view and the component for the web under `*.web.html` and `*.web.ts` and doing the same for `*.mobile.html` and `*.mobile.ts`.

First thing to do is to rename `login.html` to `login.web.html`:

<diffbox tutorial="angular2-meteor-socially" step="21.2"></diffbox>

Let's do the same with `login.ts` file but with one small change which is a new `template` property:

<diffbox tutorial="angular2-meteor-socially" step="21.3"></diffbox>


### SMS verification

As I mentioned before, we're going to use SMS verification to log in a user on the mobile application.

There is a package for that!

We will use an external package that extends Meteor's Accounts, called [accounts-phone](https://atmospherejs.com/okland/accounts-phone) that verifies phone number with SMS message, so let's add it:

    $ meteor add okland:accounts-phone

> Note that in development mode - the SMS will not be sent - and the verification code will be printed to the Meteor log.

> Latest release of accounts-phone won't work with Meteor 1.3.
Until this changes you can use `mys:accounts-phone` which fixes that issue.

**We can now move on to create a mobile version Login Component.**

A template of a mobile version will be pretty much the same as for browsers:

<diffbox tutorial="angular2-meteor-socially" step="21.6"></diffbox>

We can use the same directives in the component as in Web version, so let's create a basic component without any functionality:

<diffbox tutorial="angular2-meteor-socially" step="21.5"></diffbox>

SMS verification is a two-step process. First thing to do is to verify a phone number.

Let's create a form for that:

<diffbox tutorial="angular2-meteor-socially" step="21.7"></diffbox>

It's a simple form, basically the same as the form with Email and password verification we did in previous chapters.

We can now take care of the logic. Let's create a `send` method:

<diffbox tutorial="angular2-meteor-socially" step="21.8"></diffbox>

What we did? Few things:

* form called `phoneForm` with one field `phone`.
* `send` method that calls `Accounts.requestPhoneVerification` to verify phone number and to send SMS with verification code.
* we're also keeping phone number outside the form's scope.

Great, we're half way there!

Now we need to verify that code. We will keep all the logic under `verify` method:

<diffbox tutorial="angular2-meteor-socially" step="21.9"></diffbox>

As you can see, we used `Accounts.verifyPhone` with proper arguments to call the verification process.

There are two more things that you should notice.

* New property `isStepTwo` that holds the status of sign in process. Based on that property we can tell if someone is still in the first phase or he already wants to verify code sent via SMS.
* Redirection to `PartiesList` if verification succeed.

We have all the logic, we still need to create a view for it:

<diffbox tutorial="angular2-meteor-socially" step="21.10"></diffbox>

It seems like both versions are ready.

We can now move on to `client/app.ts`.

Just as you can use `Meteor.isServer` and `Meteor.isClient` to separate your client-side and server-side code, you can use `Meteor.isCordova` to separate your Cordova-specific code from the rest of your code.

<diffbox tutorial="angular2-meteor-socially" step="21.11"></diffbox>

As you can see, we're importing both version of Login Component. But only one is being used, depending on Meteor.isCordova value.

If we would run Socially in a browser `LoginWeb` will be used.

And that's it!


## Summary

In this tutorial we showed how to make our code behave differently in mobile and web platforms. We did this by creating separate es2015 modules with specific code for mobile and web, and using them based on the platform that runs the application.
