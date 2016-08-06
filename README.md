## Tutorials Infra

To run:

    $ npm install
    $ typings install
    $ npm run start
    
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
- [ ] Remove angular2-meteor website and split the infrastructure for the usage.   
- [ ] Prepare for publish as NPM package