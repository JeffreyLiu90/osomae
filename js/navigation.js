/*jslint browser this:true long:true */
/*global window, jQuery */

/**
 * Navigation
 * @version 1.0.1
 * @requires jQuery, Double Tap to Go
 */

(function ($) {
    "use strict";

    const html = $("html");
    const body = $("body");

    // navigation
    const navigation = $(".js-navigation");
    const navigationTrigger = $(".js-navigation-trigger");
    const navigationCloser = $(".js-navigation-close");
    const navigationLinkAnchor = navigation.find("a[href*='#']");
    const navigationLinkAnchorEmpty = navigation.find("a[href='#']");
    const navigationHasSub = navigation.find("li:has(ul)");

    const CLASS_NAVIGATION_ACTIVE = "navigation-active";
    const CLASS_NAVIGATION_CLOSING = "navigation-closing";

    /**
     * Double Tap To Go
     */

    if (body.innerWidth() >= "1024") {
        navigationHasSub.doubleTapToGo();
    }

    $(window).on("resize", function () {
        if (body.innerWidth() >= "1024") {
            navigationHasSub.doubleTapToGo();
        }
    });

    /**
     * Empty Anchor Links
     */

    navigationLinkAnchorEmpty.on("click", function (e) {
        e.preventDefault();
    });

    /**
     * Mobile Navigation
     */

    // open navigation
    navigationTrigger.each(function (ignore, el) {

        $(el).on("click touchstart", function (e) {
            e.preventDefault();

            if (body.hasClass(CLASS_NAVIGATION_ACTIVE)) {
                body.addClass(CLASS_NAVIGATION_CLOSING);

                setTimeout(function () {
                    html.removeClass(CLASS_NAVIGATION_ACTIVE);

                    body.removeClass(CLASS_NAVIGATION_CLOSING);
                    body.removeClass(CLASS_NAVIGATION_ACTIVE);
                }, 250);
            } else {
                html.addClass(CLASS_NAVIGATION_ACTIVE);
                body.addClass(CLASS_NAVIGATION_ACTIVE);
            }

        });

    });

    // close navigation
    navigationCloser.each(function (ignore, el) {

        $(el).on("click touchstart", function () {

            if (body.hasClass(CLASS_NAVIGATION_ACTIVE)) {
                body.addClass(CLASS_NAVIGATION_CLOSING);

                setTimeout(function () {
                    html.removeClass(CLASS_NAVIGATION_ACTIVE);
                    body.removeClass(CLASS_NAVIGATION_CLOSING);
                    body.removeClass(CLASS_NAVIGATION_ACTIVE);
                }, 250);

            }

        });

    });

    // close on click to anchor link
    navigationLinkAnchor.each(function (ignore, el) {

        $(el).on("click touchstart", function () {

            if (body.hasClass(CLASS_NAVIGATION_ACTIVE)) {
                body.addClass(CLASS_NAVIGATION_CLOSING);

                setTimeout(function () {
                    html.removeClass(CLASS_NAVIGATION_ACTIVE);
                    body.removeClass(CLASS_NAVIGATION_CLOSING);
                    body.removeClass(CLASS_NAVIGATION_ACTIVE);
                }, 250);

            }

        });

    });

    // close navigation on esc
    $(document).keyup(function (e) {

        if (e.key === "Escape") {

            if (body.hasClass(CLASS_NAVIGATION_ACTIVE)) {
                body.addClass(CLASS_NAVIGATION_CLOSING);

                setTimeout(function () {
                    html.addClass(CLASS_NAVIGATION_ACTIVE);
                    body.removeClass(CLASS_NAVIGATION_CLOSING);
                    body.removeClass(CLASS_NAVIGATION_ACTIVE);
                }, 250);

            }

        }

    });

}(jQuery));
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */