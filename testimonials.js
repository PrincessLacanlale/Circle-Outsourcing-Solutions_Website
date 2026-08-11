document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.testi-carousel');
  const track = document.getElementById('testiTrack');
  const dotsWrap = document.getElementById('testiDots');

  if (!carousel || !track || !dotsWrap) return;

  const slides = Array.from(track.querySelectorAll('.testi-card'));
  if (slides.length === 0) return;

  const mq = window.matchMedia('(max-width: 1200px)');

  let index = 0;
  let isDragging = false;
  let startX = 0;
  let dragDeltaPercent = 0;

  // Build one dot per slide (tappable shortcut, in addition to swiping)
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'testi-dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.querySelectorAll('.testi-dot'));

  function render() {
    track.style.transform = 'translateX(-' + (index * 100) + '%)';
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    render();
  }

  function onPointerDown(e) {
    if (!mq.matches) return; // swipe only active in carousel mode
    isDragging = true;
    startX = e.clientX;
    dragDeltaPercent = 0;
    track.style.transition = 'none';
    track.style.cursor = 'grabbing';
    track.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    dragDeltaPercent = (dx / track.clientWidth) * 100;
    track.style.transform = 'translateX(' + (-(index * 100) + dragDeltaPercent) + '%)';
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = '';
    track.style.cursor = 'grab';

    const SWIPE_THRESHOLD = 15; // percent of track width
    if (dragDeltaPercent <= -SWIPE_THRESHOLD) {
      goTo(index + 1);
    } else if (dragDeltaPercent >= SWIPE_THRESHOLD) {
      goTo(index - 1);
    } else {
      render(); // not far enough — snap back to the current slide
    }
    dragDeltaPercent = 0;
  }

  track.addEventListener('pointerdown', onPointerDown);
  track.addEventListener('pointermove', onPointerMove);
  track.addEventListener('pointerup', onPointerUp);
  track.addEventListener('pointercancel', onPointerUp);
  track.addEventListener('pointerleave', function (e) {
    // guards against a stuck drag if the pointer leaves the element mid-drag
    if (isDragging && e.pointerType === 'mouse') onPointerUp();
  });

  render();

  // When crossing back to desktop, clear the inline transform so the
  // static grid (display: grid at >1200px) isn't left offset.
  mq.addEventListener('change', function (e) {
    if (!e.matches) {
      track.style.transform = '';
    } else {
      index = 0;
      render();
    }
  });
});