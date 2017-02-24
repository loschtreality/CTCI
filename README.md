# CTCI

This is a repository for my solutions to the Cracking The Coding Interview challenge questions. The solutions are written in both Ruby and JavaScript and both have their respective test files.

## JavaScript (ES6)

These tests are written in [Mocha](https://mochajs.org/) and reside in the *test* directory. This repository uses [Yarn](https://yarnpkg.com/en/) to manage versions but is also compatible with NPM. In order to run the specs, please follow the setup instructions below:

1. `npm install` or `yarn install` in the root directory.
2. To run all spec files type `npm test` or `yarn test`, single files can be ran by typing `mocha test/(file name)`


## Ruby (2.1.3)

Tests are written in [Rspec](http://rspec.info/) and reside in the *spec* directory. In order to run the specs, please follow the setup instructions below:

1. Run `bundle install` in the root directory.
2. To run all spec files type `rspec`, for a single file type `rspec spec/(file name)`. Note: sometimes these will be prefixed with `bundle exec`.
