import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
  entry: 'src/js/main.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    eslint(),
    nodeResolve(
      { jsnext: true, main: true, browser: true  }
    ),
    commonjs({}),
    babel()
  ],
  dest: 'web/public/js/script.js'
};
