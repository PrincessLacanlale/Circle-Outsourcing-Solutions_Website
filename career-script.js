const header = document.getElementById('site-header');

        function updateHeader() {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        window.addEventListener('scroll', updateHeader);
        updateHeader();

        // Intersection Observer for fade-up
        const faders = document.querySelectorAll('.fade-up');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        faders.forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });

        // Upload CV button
        document.querySelector('.btn-cv').addEventListener('click', function() {
            alert('CV upload functionality coming soon! Please send your CV to careers@circle-outsourcing.com');
        });

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('photoGrid');
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    // Check if view is mobile or tablet
    const isMobileOrTablet = () => window.innerWidth <= 1024;

    slider.addEventListener('mousedown', (e) => {
        if (!isMobileOrTablet()) return;
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown || !isMobileOrTablet()) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5; // Drag speed modifier
        slider.scrollLeft = scrollLeft - walk;
    });
});

