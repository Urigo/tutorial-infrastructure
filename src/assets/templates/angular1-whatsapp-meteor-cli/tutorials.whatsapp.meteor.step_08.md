Our last step would be implementing image messages support. We will use the same package from the previous step to achieve that.

So we will use the same logic of taking the picture in the controller, and call the same `newMessage()` server method:

<diffbox tutorial="whatsapp-meteor-tutorial" step="8.1"></diffbox>

And now we need to register an `ng-click` event to the image button on the view:

<diffbox tutorial="whatsapp-meteor-tutorial" step="8.2"></diffbox>

In the server, we need to add a validation scheme for image messages in the `newMessage()` method:

<diffbox tutorial="whatsapp-meteor-tutorial" step="8.3"></diffbox>

Our next step would be updating the chat view to support image messages:

<diffbox tutorial="whatsapp-meteor-tutorial" step="8.4"></diffbox>

Let's add some `css` to prevent images from looking silly:

<diffbox tutorial="whatsapp-meteor-tutorial" step="8.5"></diffbox>

We also want to add image icon on the chats list in case when the last message is an image message, so let's add it:

<diffbox tutorial="whatsapp-meteor-tutorial" step="8.6"></diffbox>

And this should the result:

![angular1-wa-meteor-cli](/assets/tutorials/angular1-whatsapp-meteor-cli/17.png)
