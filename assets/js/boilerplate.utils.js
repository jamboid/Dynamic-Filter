// boilerplate.Utiltiies.js

// Check if base namespace is defined
var boilerplate = boilerplate || {};

// boilerplate.utils namespace
boilerplate.utils = (function ($) {
    "use strict";
    // Variables
    var debugMode = true,
        // Console.log function with check for browsers that don't support it
        logMessage = function (logMessage) {
            if (debugMode === true) {
                if (window.console) {
                    if (console.log) {
                        console.log(logMessage);
                    }
                }
            }
        },

        // Equalise Heights
        equaliseHeights = function (elements) {
            var theseElements = elements,
                maxHeight = 0,
                currentHeight = 0;
            $(theseElements).each(function () {
                currentHeight = $(this).height();
                if (currentHeight > maxHeight){
                    maxHeight = currentHeight;
                }
            });
            $(theseElements).height(maxHeight);
        },

        // Remove the style attribute from an element
        resetStyles = function (element) {
            $(element).removeAttr("style");
        },

        // Initialisation
        init = function () {
            boilerplate.utils.cl("boilerplate.init called");
        };

    // Return Public API
    return {
        cl: logMessage,
        resetStyles: resetStyles,
        equaliseHeights: equaliseHeights,
        init: init
    };

}(jQuery));
