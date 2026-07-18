/* Smooth scroll via Lenis */
(function () {
  if (typeof Lenis === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js';
    script.async = true;
    script.onload = initLenis;
    document.head.appendChild(script);
  } else {
    initLenis();
  }
  function initLenis() {
    try {
      const lenis = new Lenis({
        duration: 1.25,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
      });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
      window.__lenis = lenis;
    } catch (e) { console.error('Lenis init error:', e); }
  }
})();
