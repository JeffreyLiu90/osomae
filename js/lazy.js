/*jslint browser */
/*global window, jQuery */

/**
 * Lazy
 * @version 1.0.1
 * @requires jQuery, jQuery Lazy
 */

(function ($) {
    "use strict";

    // classes
    const CL_LOADED = "lazy-loaded";

    // selectors
    const imagesLazy = $(".js-lazy");
    const imagesLazyParent = ".js-lazy-parent";

    /**
     * Lazy
     */

    imagesLazy.Lazy({
        threshold: 1000,
        afterLoad: function (element) {
            const image = $(element);
            const imageParent = image.parent(imagesLazyParent);

            image.addClass(CL_LOADED);
            $(imageParent).addClass(CL_LOADED);

            // if masonry exists
            if ($.isFunction($.fn.masonry)) {

                // reload masonry
                $(".js-masonry").masonry("layout");
            }
        }
    });

}(jQuery));
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */