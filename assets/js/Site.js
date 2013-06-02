// Site.js

// Check if namespace is defined
var Site = Site || {};

// Site namespace
//
// Base namespace for the Site framework
Site.init = (function ($) {
    "use strict";

    var scripts = {};
    // Initialisation
    scripts.init = function () {
        $(document).ready(function () {
            Site.utils.init();
            Site.filter.init();
        });
    };

    // Automatically call init function
    return scripts.init();

}(jQuery));