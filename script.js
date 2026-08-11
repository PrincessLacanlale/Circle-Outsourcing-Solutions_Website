// ======================================================
// SCRIPT.JS
// Header scroll
// Fade-up animations
// Trust indicator count-up
// Back to top
// ======================================================


// ======================================================
// HEADER SCROLL EFFECT
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("site-header");

    if (!header) {
        return;
    }

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

    updateHeader();

});


// ======================================================
// FADE-UP ON SCROLL
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const faders =
        document.querySelectorAll(".fade-up");

    if (!faders.length) {
        return;
    }

    const fadeObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.animationPlayState =
                            "running";

                        fadeObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    faders.forEach(function (element) {

        element.style.animationPlayState =
            "paused";

        fadeObserver.observe(element);

    });

});


// ======================================================
// TRUST INDICATORS COUNT-UP
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Count-up script loaded.");


    const statsSection =
        document.getElementById("stats-section");

    const statNumbers =
        document.querySelectorAll(
            "#stats-section .num"
        );


    if (!statsSection) {

        console.error(
            "ERROR: #stats-section was not found."
        );

        return;
    }


    if (!statNumbers.length) {

        console.error(
            "ERROR: No .num elements found inside #stats-section."
        );

        return;
    }


    let started = false;


    // --------------------------------------------------
    // COUNT ONE NUMBER
    // --------------------------------------------------

    function animateNumber(
        element,
        target,
        suffix
    ) {

        const duration = 1500;

        const startTime =
            performance.now();


        function update(currentTime) {

            const elapsed =
                currentTime - startTime;


            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            // Smooth ease-out
            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const currentValue =
                Math.round(
                    eased * target
                );


            // Update number
            element.innerHTML =
                currentValue +
                '<span class="suffix">' +
                suffix +
                "</span>";


            // Continue animation
            if (progress < 1) {

                requestAnimationFrame(
                    update
                );

            } else {

                // Exact final value
                element.innerHTML =
                    target +
                    '<span class="suffix">' +
                    suffix +
                    "</span>";

            }

        }


        requestAnimationFrame(
            update
        );

    }


    // --------------------------------------------------
    // START ALL COUNTERS
    // --------------------------------------------------

    function startCounters() {

        if (started) {
            return;
        }

        started = true;


        console.log(
            "Trust indicator count-up started."
        );


        statNumbers.forEach(
            function (element) {

                const target =
                    parseInt(
                        element.getAttribute(
                            "data-target"
                        ),
                        10
                    );


                const suffix =
                    element.getAttribute(
                        "data-suffix"
                    ) || "";


                if (isNaN(target)) {

                    console.error(
                        "Invalid data-target:",
                        element
                    );

                    return;
                }


                animateNumber(
                    element,
                    target,
                    suffix
                );

            }
        );

    }


    // --------------------------------------------------
    // CHECK IF STATS ARE VISIBLE
    // --------------------------------------------------

    function checkStatsVisibility() {

        if (started) {
            return;
        }


        const rect =
            statsSection.getBoundingClientRect();


        const isVisible =
            rect.top <
                window.innerHeight &&
            rect.bottom > 0;


        if (isVisible) {

            startCounters();

        }

    }


    // --------------------------------------------------
    // SCROLL
    // --------------------------------------------------

    window.addEventListener(
        "scroll",
        checkStatsVisibility
    );


    // --------------------------------------------------
    // RESIZE
    // --------------------------------------------------

    window.addEventListener(
        "resize",
        checkStatsVisibility
    );


    // --------------------------------------------------
    // INITIAL CHECK
    // --------------------------------------------------

    checkStatsVisibility();

});


// ======================================================
// BACK TO TOP BUTTON
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const backToTopBtn =
        document.getElementById(
            "backToTop"
        );


    if (!backToTopBtn) {
        return;
    }


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

});