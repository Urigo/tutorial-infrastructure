{{#template name="tutorials.socially.angular2.step_22.md"}}
{{> downloadPreviousStep stepName="step_21"}}

Ionic is a CSS and JavaScript framework. It is highly recommended that before starting this step you will get yourself familiar with its [documentation](http://ionicframework.com/docs/v2).

In this step we will learn how to add Ionic library into our project, and use its powerful directives to create cross platform mobile (Android & iOS) applications.

We will achieve this by creating separate views for web and for mobile  so be creating a separate view for the mobile applications, but we will keep the shared code parts as common code!

### Adding Ionic

Using ionic is pretty simple - first, we need to install it:

    $ meteor npm install ionic-angular --save

We also have to install two missing packages:

    $ meteor npm install @angular/http @angular/router --save

Ionic's main scss file won't work with Meteor 1.3. Don't worry! We just need to remove one line from it.

Let's go to `/node_modules/ionic-angular/ionic.scss`, copy and paste it to `client/css` directory.

Now we can remove or just disable that import with `Ionicons` (something around 39th line):

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.2"}}

Now let's import that file into `main.scss`:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.3"}}


### Separate web and mobile things

We're going to have one main entry point that depends on two main components.

First thing to do is to move `client/app.ts` to `client/imports/app/app.ts`.

We can't forget about the template, let's move `app.html` too.

Since there will be two main components we still need to rename `app.ts` to `app.web.ts`, also `app.web.html`.

Great so far! You probably noticed that template also has to change:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.7"}}

Web version of Socially Component no longer needs web/mobile separation, it's going to use only web versions of all components.

For now, there are still two versions of `Login` component, let's take care of it:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.8"}}

Because of moving Socially component we need to update all relatives paths:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.9"}}

### Main entry point

One thing is missing, the client-side entry point, let's create it:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.10"}}

Since we're going to choose between mobile and web version of Socially component we need to defer the bootstrap process somehow.

Let's wrap `bootstrap` with a function:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.11"}}

Awesome! We also removed `reflect-metadata` because we want to move it on top of our app.
The great place for placing it will be `client/main.ts`.

Let's run our app inside recently created entry point:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.12"}}

We can now take care of the mobile part.

So far, we still don't have main mobile component but let's create a space for that by creating a `client/imports/app/app.mobile.ts` that looks like this:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.13"}}

Now we can run proper version of our app depending on `Meteor.isCordova`:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.14"}}

In mobile environment, we need to wait for device to be ready.
The `deviceready` event comes with help:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.15"}}


### Enhanced by Ionic

It seems like you're ready to start your journey with Ionic framework.

At the very beginning, we need to specify a navigation.
Let's put this inside `app.mobile.html`:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.16"}}

Now we can move on to create the Socially component:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.17"}}

As you can see, there is no `selector` defined.

> With Angular2, you can bootstrap your App using a component with any selector you want.
With ionic, that selector will be replaced with `ion-app`.

About other components:

> There is also no need to specify `selector` for other components but only if they are used as Pages.

Ionic is based on Pages. Think of it as a view that is very similar to Angular2 router's view.

Everything seems to be ready to be bootstraped. With Ionic, we won't be using Angular2's bootstrap, not even `angular2-meteor-auto-bootstrap`.

**Time for `ionicBootstrap`**

We have to use it to bootstrap an App. We also need to use few providers from `angular2-meteor`:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.18"}}

Amazing! Socially works on browsers and also as a mobile app that uses Ionic framework!

There are plenty of issues with Material Design's and Ionic's CSS rules. Let's take care of one as an example, so it will be easier to fix in the future.

We will create a mechanism that adds `web` or `mobile` class to `<body/>` element depends on environment.

First thing to do is to defined those classes:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.19"}}

As you can see, we fixed an issue with scrollbar.

We all like JavaScript so let's move now to more interesting part! We will create a `setClass` function:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.20"}}

**Different selector problem**

Few steps ago I mentioned about `ion-app` selector. In Socially, we're using `<app/>` as the main component, so it's an issue for us, right now. Don't worry! We have a package for that! It's called [`ionic-selector`](https://github.com/jellyjs/ionic-selector).

We need to install it:

    $ meteor npm install ionic-selector --save

What it does? It's changing tag name of the main component (`app` by default but you can specify any selector you want) to `ion-app`.

An example:

```html
<body>
  <app class="main"></app>
</body>
```

will be changed to:

```html
<body>
  <ion-app class="main"></ion-app>
</body>
```

Let's now implement it:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.22"}}

### Using Ionic components

Our main Page would be `PartiesList`, just like in the web version of Socially.

Since we want to keep the logic and only change a view, let's move whole PartiesList class to separate file `parties-list.class.ts`:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.23"}}

We need to add few import statements:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.24"}}

Let's also use `InjectUser` on that class:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.25"}}

It seems like we can move on to create a web version of PartiesList component:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.26"}}

As you can see, we removed few import statements that have been used in class by itself.

We also changed the `template` and renamed template file to `parties-list.web.html`.

We can now remove `parties-list.ts` file.

Last thing to do on web side of our App is to update `app.web.ts` file:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.29"}}

Let's take care of the mobile part.

We need a mobile template for PartiesList:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.30"}}

There is no template without a component!

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.31"}}

Did you noticed missing selector?
As I mentioned before, there is no need to use selector option on component that is used as a Page.

We want to display a list of parties with RSVPs. We can achieve this by adding `RsvpPipe` to the component:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.32"}}

And by using `ionCard` component with few other very helpful components:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.33"}}

Let's set PartiesList component as the default Page of our App:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.34"}}

### Fixing jalik:ufs in development mode

There is an issue with `jalik:ufs` package but only in development mode.

UploadFS sets an absolute path of a file and saves it in collection.

So if you upload a file in development there might be a problem when running an app with a different port.

But we will take care of it!

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.35"}}

Now we can just add it to the component:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.36"}}

and implement it in the view:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.37"}}

### Fixing fonts

As you probably notice, there are many warnings about missing fonts. We can easily fix it with the help of a package called [`mys:fonts`](https://github.com/jellyjs/meteor-fonts).

    $ meteor add mys:fonts

That plugin needs to know which font we want to use and where it should be available.

Configuration is pretty easy, you will catch it by just looking on an example:

{{> DiffBox tutorialName="meteor-angular2-socially" step="22.39"}}

Now `roboto-regular.ttf` is availbe under `http://localhost:3000/fonts/roboto-regular.ttf`.

And... You have an app that works with Ionic!

## Summary

In this tutorial we showed how to use Ionic and how to separate the whole view for both, web and mobile.

We also learned how to share component between platforms, and change the view only!

We also used Ionic directives in order to provide user-experience of mobile platform instead of regular responsive layout of website.

{{/template}}
