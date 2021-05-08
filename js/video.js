/*jslint browser this:true long:true */
/*global window, jQuery */

/**
 * Video
 * @version 1.0.1
 * @requires jQuery
 */

(function ($) {
    "use strict";

    // classes
    const CV_PLAYING = "video-playing";
    const CV_PAUSED = "video-paused";

    // selectors
    const videoContainer = $(".js-video-container");

    /**
     * Video Play/pause Button
     * @param video
     */

    function forqyVideoPlayPause(video) {

        if (video.length) {

            const isPlaying = video.get(0).currentTime > 0 && !video.get(0).paused && !video.get(0).ended && video.get(0).readyState > 2;

            if (!isPlaying) {
                video.get(0).play();
            } else {
                video.get(0).pause();
            }

        }

    }

    /**
     * Video Class Toggle
     * @param video
     * @param container
     */

    function forqyVideoClassToggle(video, container) {

        if (video.length) {

            if (video.get(0).paused) {
                container.addClass(CV_PAUSED);
                container.removeClass(CV_PLAYING);
            } else {
                container.addClass(CV_PLAYING);
                container.removeClass(CV_PAUSED);
            }

        }

    }

    /**
     * Video
     */

    // container
    videoContainer.each(function (ignore, el) {
        const container = $(el);
        const video = container.find(".js-video");

        if (video.length) {

            if (video.attr("autoplay")) {
                container.addClass(CV_PLAYING);
                container.removeClass(CV_PAUSED);
            } else {
                container.addClass(CV_PAUSED);
                container.removeClass(CV_PLAYING);
            }

        }

    });

    // button play/pause
    $(document).on("click", ".js-video-playpause", function (e) {
        e.preventDefault();

        const container = $(this).parents(".js-video-container");
        const video = container.find(".js-video");

        forqyVideoPlayPause(video);
        forqyVideoClassToggle(video, container);

    });

}(jQuery));
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */