/*jslint browser */
/*global window, jQuery, Pace */

/**
 * Reveal
 * @version 1.0.1
 * @requires jQuery, Pace
 * @deprecated
 */

(function ($) {
    "use strict";

    // classes
    const CR_REVEALED = "revealed";

    // selectors
    const reveal = $(".js-reveal");
    const revealContainer = $(".js-reveal-container");

    // settings
    const revealDelay = 140; // ms
    const revealOffset = 40; // px

    /**
     * Reveal
     * @param container
     * @param reveal
     * @param delay
     * @param offset
     */

    function forqyReveal(container, reveal, delay, offset) {

        reveal.each(function (i, el) {

            const windowBottom = $(window).scrollTop() + $(window).height();

            const element = $(el);
            const containerTop = container.offset().top;

            // is in viewport
            if (windowBottom >= containerTop + offset) {
                setInterval(function () {
                    element.addClass(CR_REVEALED);
                }, i * delay);
            }

        });

    }

    // if loaded by pace.js
    Pace.on("done", function () {

        // reveal within container

        revealContainer.each(function (ignore, el) {

            const container = $(el);
            const revealEl = container.find(reveal);

            // reveal
            forqyReveal(container, revealEl, revealDelay, revealOffset);

            // reveal on scroll
            $(window).scroll(function () {
                forqyReveal(container, revealEl, revealDelay, revealOffset);
            });

        });

    });

}(jQuery));
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */