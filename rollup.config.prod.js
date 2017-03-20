import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
  entry: 'src/js/main.js',
  format: 'iife',
  sourceMap: 'true',
  sourceMapFile: 'web/public/js/script.min.js',
  plugins: [
    nodeResolve(
      { jsnext: true, main: true, browser: true  }
    ),
    commonjs({}),
    babel(),
    uglify()
  ],
  dest: 'web/public/js/script.min.js'
};
