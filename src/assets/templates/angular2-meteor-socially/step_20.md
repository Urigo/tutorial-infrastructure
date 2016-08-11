{{#template name="tutorials.socially.angular2.step_20.md"}}
{{> downloadPreviousStep stepName="step_19"}}

In this step we are going to add the ability to upload images into our app, and also sorting and naming them.

Angular-Meteor can use Meteor [UploadFS](https://github.com/jalik/jalik-ufs) which is a suite of Meteor packages that together provide a complete file management solution including uploading, downloading, storage, synchronization, manipulation, and copying.

It supports several storage adapters for saving files to the local filesystem, GridFS and additional storage adapters can be created.

The process is very similar for handling any other MongoDB Collection!

So let's add image upload to our app!


We will start by adding UploadFS to our project, by running the following command:

    $ meteor add jalik:ufs

Now, we will decide the storage adapter we want to use.
In this example, we will use the GridFS as storage adapters, so we will add the adapter by running this command:

    $ meteor add jalik:ufs-gridfs

Note: you can find more information about Stores and Storage Adapters on the [UploadFS](https://github.com/jalik/jalik-ufs)'s GitHub repository.

So now we have the UploadFS support and the storage adapter installed - we still need to create a UploadFS object to handle our files.
Note that you will need to define the collection as shared resource because you will need to use the collection in both client and server side.

### Creating the Mongo Collection and UploadFS Store

Let's start by creating `collections/images.ts` file, and define a Mongo Collection object called "Images". Since we want to be able to make thumbnails we have to create another Collection called "Thumbs".

Also we will use the stadard Mongo Collection API that allows us to defined auth-rules.

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.3"}}

Let's now create interfaces for both collections:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.4"}}

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.5"}}

And use them on Images and Thumbs collections:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.6"}}

We have to create Stores for Images and Thumbs.

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.7"}}

Let's explain a bit what happened.

* We assigned Stores to their Collections, which is required.
* We defined names of these Stores.
* We added filter to ImagesStore so it can receive only images.
* Every file will be copied to ThumbsStore.

There is a reason why we called one of the Collections the `Thumbs`!

Since we transfer every uploaded file to ThumbsStore, we can now easily add file manipulations.

Let's resize every file to 32x32:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.8"}}

We used [`gm`](https://github.com/aheckmann/gm) module, let's install it:

    $ meteor npm install gm --save

> Note: To use this module, you need download and install [GraphicsMagick](http://www.graphicsmagick.org/) or [ImageMagick](http://www.imagemagick.org/). In Mac OS X, you can use [Homebrew](http://brew.sh/) and do: `brew install graphicsmagick` or `brew install imagemagick`.


### Image upload

Note that for file upload you can use basic HTML `<input type="file">` or any other package - you only need the HTML5 File object to be provided.

For our application, we would like to add ability to drag-and-drop images, so we use Angular2 directive that handles file upload and gives us more abilities such as drag & drop, on the client side. In this example, We used [`angular2-file-drop`](https://github.com/jellyjs/angular2-file-drop), which is still in develop. In order to do this, let's add the package to our project:

    $ meteor npm install angular2-file-drop --save

Now, let's create the `PartiesUpload` component. It will be responsible for uploading photos.

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.10"}}

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.11"}}

We want to use it in `PartiesForm`:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.12"}}

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.13"}}

Now, let's implement `fileDrop` directive:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.15"}}

As you can see we used `fileOver` event. It tells the component if file is over the drop zone.

We can now handle it inside the component:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.16"}}

Second thing is to handle `onFileDrop` event:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.17"}}

Now our component is able to catch any dropped file, so let's create a function to upload that file into server.

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.18"}}

Quick explanation. We need to know the name, the type and also the size of file we want to upload. We can get it from `sourceFile` object.

Since `sourceFile` is a `File` type object and `UploadFS.Uploader()` requires an `ArrayBuffer`, we need to transform it somehow. This is why we use `FileReader`.

> You can read more about [FileReader on Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)

Now we can move on to implement that function in PartiesUpload component:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.19"}}

Let's also add `file-uploading` class to our drop zone:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.20"}}

### Display Uploaded Images

Let's create a simple gallery to list the images in the new party form.

First thing to do is to create a Publication for thumbnails:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.21"}}

As you can see we also created a Publication for images. We will use it later.

We still need to add it on the server-side:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.22"}}

Now let's take care of UI. This will need to be reactive, so we have to extend our component by `MeteorComponent` class, in order to use subscriptions.

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.23"}}

We will keep the ids of the uploaded files in an instance of `ReactiveVar`:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.24"}}

Let's now subscribe to `thumbs` publication with an array of those ids we created in the previous step:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.25"}}

Now we can look for thumbnails that come from ImagesStore:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.26"}}

We still don't see any thumbnails:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.27"}}

Since we are working on a view right now, let's add some style.

We need to create `_parties-upload.scss` file:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.28"}}

and to import that file in `client/css/main.scss`:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.29"}}

Great! We can move on to the next step. Let's do something with the result of the `upload` function.

We will create the `addFile` method that updates the `files` property:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.30"}}

We want a communication between PartiesUpload and PartiesForm. Let's use `Output` decorator and the `EventEmitter` to notify PartiesForm component about every new file.

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.31"}}

On the receiving side of this connection we have the PartiesForm component.

Create a method that handles an event with the new file and put images inside the FormBuilder.

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.32"}}

To keep Party interface up to date, we need to add `images` to it:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.33"}}

The last step will be to create an event binding for `onFile`.

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.34"}}

### Display the main image of each party on the list

We will use Pipes to achieve this.

Let's create the `DisplayMainImagePipe` inside `client/imports/pipes/pipes.ts`:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.35"}}

As you can see we're using `MeteorComponent` to make it reactive and we're looking for the first image of the `Party.images` array.

Since we have it done, let's add it to PartiesList:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.36"}}

Notice that we also subscribed to `images`.

We can now just implement it:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.37"}}

Add some css rules to keep the control of images:

{{> DiffBox tutorialName="meteor-angular2-socially" step="20.38"}}


### Cloud Storage

By storing files in the cloud you can reduce your costs and get a lot of other benefits.

Since this chapter is all about uploading files and UploadFS doesn't have built-in support for cloud services we should mention another library for that.

We recommend you to use [Slingshot](https://github.com/CulturalMe/meteor-slingshot/). You can install it by running:

    $ meteor add edgee:slingshot

It's very easy to use with AWS S3, Google Cloud and other cloud storage services.

From slignshot's repository:

> meteor-slingshot uploads the files directly to the cloud service from the browser without ever exposing your secret access key or any other sensitive data to the client and without requiring public write access to cloud storage to the entire public.

{{/template}}
