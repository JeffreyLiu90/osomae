/*jslint browser */
/*global window, jQuery */

/**
 * Forms
 * @version 1.0.1
 * @requires jQuery
 */

(function ($) {
    "use strict";

    // classes
    const CF_EMPTY = "field-empty";
    const CF_ACTIVE = "field-active";

    // selectors
    const field = ".fy-field";
    const input = $(field).find(".fy-input");

    // input
    input.each(function (ignore, el) {

        const container = $(el).parents(field);

        if (el.value && el.value.trim() === "") {
            container.addClass(CF_EMPTY);
        }

        // focus
        $(el).on("focus", function () {
            container.addClass(CF_ACTIVE);
            container.removeClass(CF_EMPTY);
        });

        // blur
        $(el).on("blur", function () {

            container.removeClass(CF_ACTIVE);

            if (el.value.trim() === "") {
                container.addClass(CF_EMPTY);
            } else {
                container.removeClass(CF_EMPTY);
            }

        });

    });

}(jQuery));
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */