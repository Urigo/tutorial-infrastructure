# Tutorials Infra

## Serve static website

    $ npm install -g http-server
    $ cd static-website
    $ http-server

## Development

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
- [x] Add support for Markdown from Tortilla
- [x] Fix Code Diff link to support Tortilla tags
- [ ] Add Download Zip (based on Tortilla tag)
- [ ] Beautiful Design
- [x] Add support for Patch from Tortilla
- [ ] Update all tutorials to use Tortilla
- [ ] Add JSDocs generate for angular2-meteor
- [x] Implement Video Feature
- [x] Patch file caching
- [ ] Add support for deprecated APIs
- [ ] Page title support (title tag)
- [ ] SEO support (keyword tags in head tag) + Site map

## TODO for production

- [x] Find a solution for the assets
- [x] Test against NPM's `http-server` (Works great!)
- [ ] Test against regular HTTP servers (like GitHub pages)
- [ ] CSS minification in production HTMLs
- [ ] Split the infrastructure from the website
- [ ] Prepare for publish as NPM package
