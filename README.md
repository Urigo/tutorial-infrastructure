# Tutorials Infra

## Serve static website

    $ npm install -g http-server
    $ cd static-website
    $ http-server

## Generate static website for local usage

    $ npm install
    $ npm run generate-local

Then all of the generated HTML files will be in: `./static-website/` directory.

## Generate static website for publishing (gh-pages)

    $ npm install
    $ npm run generate
    $ npm run publish

## Development

Install first:

    $ npm install -g typings webpack rimraf nodemon
    $ npm install
    $ typings install

And in two different Terminal tabs:

    $ npm start
    $ npm run watch

Open you browser [http://localhost:3000](http://localhost:3000) !

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
- [x] Add Download Zip (based on Tortilla tag)
- [x] Add support for Patch from Tortilla
- [x] Implement Video Feature
- [x] Patch file caching
- [x] Page title support (title tag)
- [x] Add support for deprecated APIs notice
- [x] SEO support (keyword tags in head tag)
- [x] Fix markdown anchor links (based on base tag)
- [x] Add paid support pages
- [x] Fix links when not running under "/" path
- [x] Beautiful Design 
- [x] Update `meteor-angular-socially` to use Tortilla
- [x] Update `meteor-angular2.0-socially` to use Tortilla
- [x] Update `blaze-angular2-migration-tutorial` to use Tortilla
- [x] Update WhatsApp Ionic CLI to use Tortilla
- [x] Update WhatsApp Meteor CLI to use Tortilla
- [x] Update WhatsApp 2 Meteor CLI to use Tortilla
- [x] Update WhatsApp 2 Ionic CLI to use Tortilla
- [x] Google Analytics
- [x] Update default API docs page for angular2-meteor
- [x] Fix active indication on API / tutorials in production
- [x] Go through all tutorials and make sure all works
- [x] Add input onclick for command line instructions
- [x] Add back angular 1 socially videos
- [x] Add "improve this tutorial" for tutorial instructions
- [x] Added 404 page with gh-pages support (https://help.github.com/articles/creating-a-custom-404-page-for-your-github-pages-site/)
- [x] Sitemap + robots.txt
- [ ] Angular 2 API docs missing `bootstrap` page
- [ ] Add "improve this code" for diff box
- [x] Add support for standard PATCH file that GitHub supports (instead of format-patch)

## TODO for production

- [x] GitHub Pages deployment with domain and SSL
- [x] Angular 2 API docs pages: meteor-rxjs, angular2-compilers
- [x] Deprecate angular2-meteor package
- [x] Find a solution for the assets
- [x] Test against NPM's `http-server` (Works great!)
- [x] Test against regular HTTP servers (like GitHub pages)
- [x] CSS minification in production HTMLs
- [ ] Move the actual website into `angular-meteor-docs` repo.
- [ ] Package and publish `tutorial-infrastructue` to NPM
