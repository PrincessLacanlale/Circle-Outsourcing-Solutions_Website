// ======================================================
// CONTACT PAGE SCRIPT
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    // ==================================================
    // HEADER SCROLL
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

        window.addEventListener("scroll", updateHeader);
        updateHeader();
    }


    // ==================================================
    // FADE-UP ANIMATION
    // ==================================================

    const faders = document.querySelectorAll(".fade-up");

    if (faders.length > 0 && "IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.animationPlayState = "running";

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        faders.forEach(el => {

            el.style.animationPlayState = "paused";

            observer.observe(el);

        });

    }


    // ==================================================
    // FAQ TOGGLE
    // ==================================================

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        item.addEventListener("click", function () {

            const isActive =
                this.classList.contains("active");

            // Close all
            faqItems.forEach(faq => {
                faq.classList.remove("active");
            });

            // Open selected
            if (!isActive) {
                this.classList.add("active");
            }

        });

    });


    // ==================================================
    // CONTACT FORM
    // ==================================================

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (e) {

                e.preventDefault();

                alert(
                    "Thank you for your message! We will get back to you within 24 hours."
                );

                contactForm.reset();

            }
        );

    }


    // ==================================================
    // BACK TO TOP
    // ==================================================

    const backToTopBtn =
        document.getElementById("backToTop");

    if (backToTopBtn) {

        function toggleBackToTop() {

            if (window.scrollY > 400) {
                backToTopBtn.classList.add("visible");
            } else {
                backToTopBtn.classList.remove("visible");
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

    }

});