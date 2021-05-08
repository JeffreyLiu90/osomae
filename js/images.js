/*jslint browser this:true long:true */
/*global window, jQuery, PhotoSwipe, PhotoSwipeUI_Default */

/**
 * Images
 * @version 1.0.1
 * @requires jQuery, PhotoSwipe, PhotoSwipeUI_Default
 */

(function ($) {
    "use strict";

    // selectors
    const pswp = $(".js-pswp");
    const pswpImage = $(".js-image");

    /**
     * forqyGalleryGetImages
     * @param gallery
     * @param el
     * @returns {*[]}
     */

    function forqyGalleryGetImages(gallery, el) {
        const elements = $(gallery).find("a[data-size]").has("img");
        const galleryItems = [];
        let index;

        elements.each(function (i) {
            const $el = $(this);
            const size = $el.data("size").split("x");
            const $title = $el.parent("figure").find("figcaption").html();

            galleryItems.push({
                src: $el.attr("href"),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10),
                title: $title,
                el: $el
            });

            if (el === $el.get(0)) {
                index = i;
            }
        });

        return [galleryItems, parseInt(index, 10)];

    }

    /**
     * forqyOpenPhotoSwipe
     * @param element
     */

    function forqyOpenPhotoSwipe(element) {
        const pswpEl = pswp.get(0);
        const galleryEl = $(element).parents(".js-images").first();

        let options;
        let items;
        let index;

        items = forqyGalleryGetImages(galleryEl, element);
        index = items[1];
        items = items[0];

        // photoswipe options
        options = {
            index: index,
            loop: true,
            bgOpacity: 1,
            shareEl: false,
            closeOnScroll: false,
            closeOnVerticalDrag: false,
            pinchToClose: false,
            showHideOpacity: true,
            showAnimationDuration: 300,
            hideAnimationDuration: 300,
            preload: true,
            history: false,
            loadingIndicatorDelay: 0,
            barsSize: {
                top: 60,
                bottom: "auto"
            }
        };

        // pass data to photoswipe and initialize it
        const gallery = new PhotoSwipe(pswpEl, PhotoSwipeUI_Default, items, options);
        gallery.init();

    }

    /**
     * Open PhotoSwipe
     */

    pswpImage.on("click", function (e) {
        e.preventDefault();

        forqyOpenPhotoSwipe(this);
    });

}(jQuery));
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */