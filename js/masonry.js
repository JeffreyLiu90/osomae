/*jslint browser */
/*global window, jQuery */

/**
 * Masonry
 * @version 1.0.2
 * @requires jQuery, Masonry, ImagesLoaded
 */

(function ($) {
    "use strict";

    $(window).on("load", function () {

        // init
        const masonryGrid = $(".js-masonry").imagesLoaded(function () {

            // init after all images have loaded
            masonryGrid.masonry({
                itemSelector: ".js-masonry-item",
                columnWidth: ".js-masonry-size",
                percentPosition: true,
                horizontalOrder: true,
                gutter: 0
            });

        });

        // layout after window width changes
        $(window).on("resize", function () {
            masonryGrid.masonry("layout");
        });

    });

}(jQuery));
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */