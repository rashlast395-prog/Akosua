/* Custom cursor */
(function () {
  const dot = document.createElement('div');
  const ring = document.createElement('div');
  dot.className = 'cursor-dot'; ring.className = 'cursor-ring';
  document.body.appendChild(dot); document.body.appendChild(ring);
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let dx = mx, dy = my, rx = mx, ry = my;
  document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
  const hoverTargets = 'a, button, [role="button"], .tilt, .magnetic';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) ring.classList.add('hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) ring.classList.remove('hover');
  });
  function tick() {
    dx += (mx - dx) * 0.25; dy += (my - dy) * 0.25;
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    dot.style.transform = `translate3d(${dx - 4}px, ${dy - 4}px, 0)`;
    ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
    requestAnimationFrame(tick);
  }
  tick();
  if ('ontouchstart' in window) { dot.style.display = 'none'; ring.style.display = 'none'; }
})();
