/*jslint browser */
/*global window, jQuery */

/**
 * Auto-hide
 * @version 1.0.2
 * @requires jQuery
 */

(function ($) {
    "use strict";

    // classes
    const CA = "is-autohide";
    const CA_ON_TOP = "is-on-top";
    const CA_VISIBLE = "is-visible";
    const CA_HIDDEN = "is-hidden";

    // selectors
    const autohide = $(".js-autohide");

    // settings
    let scrolling = false;
    let previousTop = 0;

    const scrollDelta = 10;
    const scrollOffset = autohide.innerHeight();

    /**
     * Auto-hide Check
     * @param currentTop
     */

    function forqyAutoHideCheck(currentTop) {

        if (currentTop > scrollOffset) {

            if (previousTop - currentTop > scrollDelta) {
                // scrolling up
                autohide.removeClass(CA_ON_TOP);
                autohide.addClass(CA_VISIBLE);
                autohide.removeClass(CA_HIDDEN);
            } else if (currentTop - previousTop > scrollDelta) {
                // scrolling down
                autohide.removeClass(CA_ON_TOP);
                autohide.addClass(CA_HIDDEN);
                autohide.removeClass(CA_VISIBLE);
            }

        } else if (currentTop === 0) {
            // on top
            autohide.addClass(CA_ON_TOP);
        } else {
            autohide.removeClass(CA_ON_TOP);
            autohide.removeClass(CA_VISIBLE);
            autohide.removeClass(CA_HIDDEN);
        }

    }

    /**
     * Auto-hide
     */

    function forqyAutoHide() {
        const currentTop = $(window).scrollTop();

        autohide.each(function () {
            autohide.addClass(CA);
            forqyAutoHideCheck(currentTop);
        });

        previousTop = currentTop;
        scrolling = false;
    }

    /**
     * Start Auto-hide
     */

    forqyAutoHide();

    // on scroll
    $(window).on("scroll touchmove", function () {

        if (autohide.length) {

            if (!scrolling) {
                scrolling = true;

                setTimeout(forqyAutoHide, 0);
            }

        }

    });

}(jQuery));
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */