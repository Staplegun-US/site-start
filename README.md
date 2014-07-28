site-start
==========

A starter site kit that includes normalize.css, Susy 2 Grid, SASS compilation, Compass, Coffeescript compilation,
automatic CSS and JS minification, and a few custom mixins and javascript snippets.

## Installation
```bash
git clone https://github.com/Staplegun-US/site-start.git
cd site-start
bundle # To get your gems installed
npm install # To install your node packages
```

We use bundler here to install Susy and Compass gems and manage dependencies.
Bundler ensures that your gem versions are the ones that are explicitly defined in the
`Gemfile`. These gems are only
installed in the local project directory, and won't affect any global gems you use. If you need to use
the CLI tools these gems provide, run `bin/sass` or `bin/compass`, or prefix your
command with `bundle exec`

## Usage

The `index.html` comes preset with your doctypes, google analytics settings,
css/js inclusions, and a basic semantic body to get you started. To make full
use of the site-start though, you'll want to use grunt.

## Grunt

To run grunt:
```bash
grunt
```

Here's the assets directory structure:
```
assets
+-- css
|   +--screen.css
+-- coffee
|   +--application.coffee
|   +--script.coffee
+-- js
|   +-- ie
|   |   +-- ..
|   +-- lib
|   |   +-- ..
|   +-- min
|   |   +-- ..
|   +--application.js
|   +--script.js
|   +--coffee.js
+-- sass
|   +-- partials
|   |   +-- ..
|   +--application.scss
|   +--screen.scss
```

Running grunt will do the following for you
#### CSS
* Import all sass files into `assets/sass/application.scss` (through Sass imports)
* Compile `assets/sass/application.scss` into `assets/css/screen.css`, as well as
  minimize that file

Grunt runs the Sass task with `bundle exec` and automatically includes compass
and the susy grid toolkit, so as long as you have
installed your gems with bundler, grunt will be using the right versions of susy
and compass.

#### JS
* Compile all coffeescript files listed in `assets/coffee/application.coffee` into an untracked build
  directory (`assets/coffee/build/`), which further gets turned into
  `assets/javascript/coffee.js`
* Compile all javascript files listed in `assets/js/application.js` into an untracked build
  directory (`assets/js/build/`), which will then get minified into
  `assets/js/min/scripts.js`
* Compile all javascript files listed in `assets/js/ie/application.js` into an untracked build
  directory (`assets/js/ie/build/`), which will then get minified into
  `assets/js/min/ie.js`

**In Summary**: The important files you care about including overall are:
* `assets/js/min/scripts.min.js`
* `assets/css/screen.css`
* `assets/js/min/ie.min.js` -- If you are supporting deprecated IE versions

#### Images
Grunt also will automatically optimize your images, and keep an unoptimized backup.

* Put images in `assets/images/src`
* Optimized images will get placed in `assets/images/dist` with the same
  filenames.

Only images that have been modified will ever get re-optimized.

`grunt watch` will watch the images directory, or there is the separate `grunt
images` task that will specifically optimize all images that need minifying.

And after all this occurs, grunt will continue to watch the necessary files for
updates automatically, and run the necessary grunt tasks when any files are
changed.

If you add in any sass/coffee/js files that you don't want automatically
compiled, then just don't include them in the directory's application.* file.

All of the final result files that Grunt compiles for you are already
included in the `index.html`, so hack away without worry!

========
## [Staplegun](http://staplegun.us)
