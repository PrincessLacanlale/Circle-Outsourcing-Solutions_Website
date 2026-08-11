// ======================================================
// HOW IT WORKS PAGE SCRIPT
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    // ==================================================
    // HEADER SCROLL EFFECT
    // ==================================================

    const header = document.getElementById("site-header");

    if (header) {

        function updateHeader() {

            if (window.scrollY > 40) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        }

        window.addEventListener(
            "scroll",
            updateHeader
        );

        // Run once on page load
        updateHeader();
    }


    // ==================================================
    // FADE-UP ANIMATION
    // ==================================================

    const faders =
        document.querySelectorAll(".fade-up");


    if (
        faders.length > 0 &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (entry.isIntersecting) {

                                entry.target.style.animationPlayState =
                                    "running";

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        faders.forEach(
            function (element) {

                element.style.animationPlayState =
                    "paused";

                observer.observe(
                    element
                );

            }
        );

    } else {

        // Fallback for browsers that do not
        // support IntersectionObserver

        faders.forEach(
            function (element) {

                element.style.animationPlayState =
                    "running";

            }
        );

    }


    // ==================================================
    // FAQ / COMMON QUESTIONS TOGGLE
    // ==================================================

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );


    faqItems.forEach(
        function (item) {

            item.addEventListener(
                "click",
                function () {

                    const isActive =
                        this.classList.contains(
                            "active"
                        );


                    // Close all FAQ items
                    faqItems.forEach(
                        function (faq) {

                            faq.classList.remove(
                                "active"
                            );

                        }
                    );


                    // Open the clicked FAQ
                    if (!isActive) {

                        this.classList.add(
                            "active"
                        );

                    }

                }
            );

        }
    );


    // ==================================================
    // BACK TO TOP BUTTON
    // ==================================================

    const backToTopBtn =
        document.getElementById(
            "backToTop"
        );


    if (backToTopBtn) {

        function toggleBackToTop() {

            if (window.scrollY > 400) {

                backToTopBtn.classList.add(
                    "visible"
                );

            } else {

                backToTopBtn.classList.remove(
                    "visible"
                );

            }

        }


        window.addEventListener(
            "scroll",
            toggleBackToTop
        );


        // Run once on page load
        toggleBackToTop();


        backToTopBtn.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }

});