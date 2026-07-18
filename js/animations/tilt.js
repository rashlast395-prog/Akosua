/* Vanilla tilt for cards */
(function () {
  document.querySelectorAll('.tilt').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const px = (x / r.width - 0.5) * 10, py = (y / r.height - 0.5) * 10;
      el.style.transform = `perspective(1000px) rotateX(${-py}deg) rotateY(${px}deg) translateY(-6px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
})();
