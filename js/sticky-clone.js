/*jslint browser */
/*global window, jQuery */

/**
 * Sticky - Clone
 * @version 1.0.1
 * @requires jQuery
 */

(function ($) {
    "use strict";

    // classes
    const CS = "is-sticky";
    const CS_VISIBLE = "is-sticky-visible";
    const CS_HIDDEN = "is-sticky-hidden";
    const CS_CLONE = "sticky-clone";

    // selectors
    const sticky = $(".js-sticky");
    const stickyContainer = $(".js-sticky-container");

    /**
     * Sticky
     * @param sticky
     */

    function forqySticky(sticky) {
        sticky.addClass(CS);

        // sticky start on
        const start = $(window).height();

        $(window).on("scroll touchmove", function () {

            if ($(window).scrollTop() >= start) {
                sticky.addClass(CS_VISIBLE);
                sticky.removeClass(CS_HIDDEN);
            } else {
                sticky.addClass(CS_HIDDEN);
                sticky.removeClass(CS_VISIBLE);
            }
        });
    }

    /**
     * Stick Clone
     */

    if (sticky.length) {

        // create clone
        const clone = sticky.clone(true).addClass(CS_CLONE);

        // find elements with unnecessary attributes
        // and remove to maintain accessibility
        clone.removeAttr("aria-label");
        clone.find("nav").removeAttr("aria-label").removeAttr("itemscope").removeAttr("itemtype").end();
        clone.find("*").removeAttr("id").end();
        clone.find("a").removeAttr("itemprop").end();

        // find all links and add negative tabindex
        clone.find("a").attr("tabindex", "-1");

        // append clone
        clone.prependTo(stickyContainer);

        // init sticky
        forqySticky(clone);

    }

}(jQuery));
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */