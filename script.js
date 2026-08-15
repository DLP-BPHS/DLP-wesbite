/* =========================================================
   DLP — NAVIGATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetID = link.getAttribute("href");

            // Ignore empty "#" links
            if (!targetID || targetID === "#") {
                return;
            }

            const target = document.querySelector(targetID);

            // If the target doesn't exist, do nothing
            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Update URL without jumping
            history.pushState(null, "", targetID);

        });

    });


    /* =====================================================
       HANDLE PAGE LOAD WITH HASH
       ===================================================== */

    if (window.location.hash) {

        const target = document.querySelector(window.location.hash);

        if (target) {

            setTimeout(() => {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        }

    }

});