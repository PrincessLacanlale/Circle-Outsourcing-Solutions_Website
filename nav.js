// NAV.JS — hamburger drawer toggle for mobile & tablet
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  if (!hamburgerBtn || !navLinks || !navOverlay) return;

  function openNav() {
    hamburgerBtn.classList.add('active');
    navLinks.classList.add('active');
    navOverlay.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // lock page scroll while drawer is open
  }

  function closeNav() {
    hamburgerBtn.classList.remove('active');
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleNav() {
    const isOpen = navLinks.classList.contains('active');
    isOpen ? closeNav() : openNav();
  }

  hamburgerBtn.addEventListener('click', toggleNav);

  // Tapping the dimmed backdrop closes the drawer
  navOverlay.addEventListener('click', closeNav);

  // Tapping a nav link closes the drawer (so it doesn't stay open after navigating)
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Esc key closes the drawer
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  // If the viewport is resized back up past the hamburger breakpoint
  // while the drawer is open, reset it so it's not stuck open on desktop.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1200 && navLinks.classList.contains('active')) {
      closeNav();
    }
  });
});

// BACK TO TOP BUTTON
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    function toggleBackToTop() {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop(); // run once in case page loads mid-scroll

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

