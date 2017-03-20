site-start
==========

By [Staplegun Design](http://staplegun.us)

A starter site kit that includes:

* Build Automation (via NPM scripts)
  * PostCSS with autoprefixer and other common plugins
  * Javascript built with Rollup, with Babel for ES6
  * Automatic CSS/JS minification
  * Image optimization
  * Watching for changes
  * Livereload
* Common vendor scripts
  * Normalize.css
  * jQuery
* Default root settings files (robots.txt, humans.txt, crossdomain.xml, .editorconfig,
  .htaccess)
* Resources for specific platforms (Craft CMS)

## Requirements

Node/NPM

## Installation
```bash
git clone https://github.com/Staplegun-US/site-start.git <repo-name>
cd <repo-name>
rm -rf .git
git init
npm install
```

## Usage
Run `npm run dev` during development.
Run `npm run prod` to generate minified files and a manifest for cache busting.

I also recommend loading web fonts asynchronously like the following, from:
http://keithclark.co.uk/articles/loading-css-without-blocking-render/
`<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Work+Sans:700" media="none" onload="if(media!='all')media='all'">`

## License

Copyright (c) 2017 [Staplegun Design](http://staplegun.us)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
