// boilerplate.js

// Check if namespace is defined
var boilerplate = boilerplate || {};

// boilerplate namespace
//
// Base namespace for the boilerplate framework
boilerplate.init = (function ($) {
    "use strict";

    var scripts = {};
    // Initialisation
    scripts.init = function () {
        $(document).ready(function () {
            boilerplate.utils.init();
            boilerplate.filter.init();
        });
    };

    // Automatically call init function
    return scripts.init();

}(jQuery));