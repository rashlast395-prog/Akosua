/* Navbar glass + active */
(function () {
  const nav = document.querySelector('header, nav');
  if (!nav) return;
  const onScroll = () => {
    const scrolled = window.scrollY > 20;
    nav.classList.toggle('glass', scrolled);
    nav.style.boxShadow = scrolled ? 'var(--shadow-sm)' : 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
