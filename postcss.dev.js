module.exports = {
  "use": [
    "stylelint",
    "postcss-import",
    "postcss-custom-properties",
    "postcss-custom-media",
    "postcss-mixins",
    "postcss-nested",
    "postcss-clearfix",
    "autoprefixer",
    "postcss-svg",
    "postcss-svgo"
  ],
  "custom-properties": {
    preserve: true
  },
  "postcss-svg": {
    paths: ['src/svg_icons']
  },
  "stylelint": {
    ignorePath: 'node_modules/**/*.css'
  },
  "local-plugins": true,
  "input": "src/css/main.css",
  "output": "web/public/css/main.css",
  "watch": true
}
