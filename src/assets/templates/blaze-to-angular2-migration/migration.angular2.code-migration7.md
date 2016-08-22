So now we will take care of the authentication Blaze Templates, such as Join and Signup.

We already created a stub Angular 2 Components for them - we just need to implement them now.

This Todos project uses AccountTemplates package, which has a default style templates for signin and join pages - we do not want to use those and we want to implement it with Angular 2.

The style and template defined in `imports/ui/accounts/accounts-templates.html` and we will copy the thing we need and create a new Angular 2 template file that looks the same.

<diffbox tutorial="migration-angular2" step="7.1"></diffbox>

So this is the basic layout without the actual form fields, let's use it:

<diffbox tutorial="migration-angular2" step="7.2"></diffbox>

Now let's add the actual form:

<diffbox tutorial="migration-angular2" step="7.3"></diffbox>

Let's understand what do we have here:

- A form, that registers an event `ngSubmit` to the Component method `join`, and we give it a name `joinForm` using variable reference ([more info here](https://angular.io/docs/ts/latest/guide/template-syntax.html))
- 3 inputs for email, password and verify password, that declared as `ngControl` which indicate that this input related to the form and effect it's validation.
- We also use two-way binding using `ngModel` for the inputs.
- Button of type `submit` that disabled when the form is not valid.

Great, now we need to add some code to the form:

- Handle errors using `errors` array.
- Implement `join()` method and create the actual user when join.
- Create a model object with our fields (email, password, verifyPassword) - note that this is optional and you can just use regular object.
- Use router to navigate the user to the main page after joining.

So let's do it:

<diffbox tutorial="migration-angular2" step="7.4"></diffbox>

> We use the root router because we are inside a child route.

This Todo base project uses packages that intent to help developing Blaze Template with Meteor Accounts, and we no longer need it, and it is also "takes control" of sign-up, so we need to remove it.

So let's remove those packages, by running:

    meteor remove useraccounts:unstyled useraccounts:flow-routing softwarerero:accounts-t9n

And we also perform some cleanup and remove some files that uses this packages - you can see those modifications in commit #7.5 (or [here](https://github.com/dotansimha/angular2-blaze-migration-tutorial/commit/6c1bab196ba03c8f5d2e933644411733acd62272))

Great! now we need to make sure that there is an indication for the user that he's logged in, so let's go back to `MainContainerComponent` and and add `currentUser` field:

<diffbox tutorial="migration-angular2" step="7.6"></diffbox>

> We put that code inside `autorun` because we want it to update when the user login or logout.

Now we should be able to see the user's name if the main page - the only missing thing is to fix and add toggle for the user menu:

<diffbox tutorial="migration-angular2" step="7.7"></diffbox>

Now, let's do the same for the `SigninComponent` - it's very similar:

<diffbox tutorial="migration-angular2" step="7.8"></diffbox>

And the Component:

<diffbox tutorial="migration-angular2" step="7.9"></diffbox>
