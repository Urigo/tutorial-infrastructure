## Tutorials Infra

To run:

    $ npm install -g typings webpack rimraf nodemon
    $ npm install
    $ typings install

And in two different Terminal tabs:

    $ npm run watch
    $ npm run server

Open you browser [http://localhost:3000](http://localhost:3000) !

At the moment, while developing, try access:

    /tutorials/angular2/socially/bootstrap

## TODO

- [x] Implement infrastructure
- [x] Implement PATCH load and convert
- [x] Use webpack build
- [x] Simplify webpack build
- [x] Implement Diffbox
- [x] DiffBox CSS [use this](https://github.com/meteor/tutorial-tools/blob/master/tutorial-diff-box/diff-box.less)
- [x] Implement Angular Universal compiler (in order to create static HTML files, [use this](https://github.com/angular/universal-starter/blob/master/webpack.config.js))
- [x] Try to understand how to build the server only without client load (Universal) = [ISSUE](https://github.com/angular/universal/issues/509)
- [x] Add automatic HTML files creation for the defined routes of the tutorial.
- [x] Implement API ref infra with JSDoc
- [x] Implement legacy API ref infra
- [x] Migrate all tutorials
- [x] Migrate angular2-meteor api docs
- [x] Add API versions support
- [x] Add API list component
- [x] Migrate angular1-meteor api docs
- [x] Implement Code diff button
- [x] Update to latest Angular Universal
- [x] Implement "Improve this..."
- [x] Fix SCSS and template load issue
- [x] Fix main SCSS load
- [x] Workaround for innerHTML issue of Universal
- [x] Use NgModule
- [ ] Beautiful Design
- [ ] Find a solution for the images
- [ ] Implement Video
- [ ] Page title (<title>)
- [ ] SEO support (keyword tags in <head>) + Site map
- [ ] Remove angular2-meteor website and split the infrastructure for the usage.
- [ ] Prepare for publish as NPM package
