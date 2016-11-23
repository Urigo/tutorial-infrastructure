## Angular 2 compilers for Meteor

`angular2-compilers` package is a part of `angular2-meteor`, and installed via Atmosphere.

The Angular2-Meteor boilerplate comes with the up-to-date compilers package.

The compilers package contains the following:

- TypeScript compiler with caching support and ready-to-use configuration for Meteor
- HTML template compiler
- Stylesheets compilers (CSS, LESS, SASS)

## Getting Started

In order to install the compilers, start by running:

    $ meteor add anuglar2-compilers
    
Now you'll be able to use your HTML files as Angular 2 Component's template, and bundle stylesheets files into you Component.

Example for usage in Angular 2 Component:

```ts
import template from './my-component.html';
import style from './my-component.scss';

@Component({
  selector: 'my-component',
  template: template,
  styles: [ style ]
})
class MyComponent {
  constructor() {
  
  }
}
```

## Usage with Blaze

The compilers package is also available for project that migrating from Blaze and want to replace the Blaze code step-by-step.

To install with blaze:
  
    $ meteor add angular2-with-blaze-compilers
    
And use `.ng2.html` extensions for your Angular 2 template files (note that inside the Component, import the file with regular `.html` extension).

Make sure to remove any stylesheet processor you have (such as LESS / SASS), because the compilers package comes with a built-in support for those.
    
For more information regarding Blaze migration to Angular 2, refer to [Blaze to Angular 2 Migration Tutorial](tutorials/migration/angular2/introduction).    

## See Also 

- [Angular 2 Compilers @ Atmosphere](https://atmospherejs.com/meteor/angular2-compilers)
- [Angular 2 Compilers Source Code @ GitHub](https://github.com/Urigo/angular-meteor/tree/master/atmosphere-packages)
- [Blaze to Angular 2 Migration Tutorial](tutorials/migration/angular2/introduction)
