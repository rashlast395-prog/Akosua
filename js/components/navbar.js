/* Navbar glass + active */
(function () {
  try {
    const nav = document.querySelector('header, nav');
    if (!nav) return;
    const onScroll = () => {
      const scrolled = window.scrollY > 20;
      nav.classList.toggle('glass', scrolled);
      nav.style.boxShadow = scrolled ? 'var(--shadow-sm)' : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  } catch (e) { console.error('Navbar init error:', e); }
})();