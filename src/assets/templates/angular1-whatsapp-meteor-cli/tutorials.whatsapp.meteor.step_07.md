So now we will add an ability to add a user profile image using the device's camera (e.g. phone or laptop).

The first part is to add the `Meteor` package that provides us this ability:

    $ meteor add okland:camera-ui

We will add now a server method for updating the user's profile image, which is just like updating any other string field of the user's profile:

<diffbox tutorial="whatsapp-meteor-tutorial" step="7.2"></diffbox>

The next step is adding the button for adding/editing the user's profile image, we will add it in the `profile` state, so update the view first:

<diffbox tutorial="whatsapp-meteor-tutorial" step="7.3"></diffbox>

And now we will implement the controller methods, which will use `Camera-UI` API for getting the image from the device, and then we will use that image and run the server method for updating the image:

<diffbox tutorial="whatsapp-meteor-tutorial" step="7.4"></diffbox>

We will add now some `css` for better layout of the profile page:

<diffbox tutorial="whatsapp-meteor-tutorial" step="7.5"></diffbox>

And this is an example for taking an image from the browser:

![angular1-wa-meteor-cli](/assets/tutorials/angular1-whatsapp-meteor-cli/16.png)

Now to ease the access to the profile page, we will add a link in the settings view:

<diffbox tutorial="whatsapp-meteor-tutorial" step="7.6"></diffbox>
