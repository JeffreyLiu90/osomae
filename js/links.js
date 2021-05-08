/*jslint browser this:true */

/**
 * Links
 * @version 1.0.0
 */

document.querySelectorAll("a[href^='#']").forEach(function (anchor) {

    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const href = this.getAttribute("href");

        if (href !== "#") {

            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */