/* Lightweight particles */
(function () {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.55;';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let W = (canvas.width = innerWidth), H = (canvas.height = innerHeight);
  window.addEventListener('resize', () => { W = canvas.width = innerWidth; H = canvas.height = innerHeight; });
  const particles = Array.from({ length: 55 }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
    r: Math.random() * 1.5 + 0.5, a: Math.random() * 0.5 + 0.15,
  }));
  const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 107, 43, ${p.a})`; ctx.fill();
    });
    if (!prefersReduced) requestAnimationFrame(draw);
  }
  draw();
})();
