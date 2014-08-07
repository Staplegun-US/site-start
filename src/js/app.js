// Make this the only JS file you include in the body
// Include external libs with 'require' calls

require('jquery');
require('underscore');

// Gives 'console' polyfills to browsers that don't use 'console'
require('./lib/console-support.js');

// Tracks outbound-link activity through Google Analytics
require('./lib/outbound.js');

$(document).ready(function(){

});
