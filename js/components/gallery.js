/* Gallery / lightbox interactions */
(function () {
  document.querySelectorAll('[data-lightbox]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const src = btn.dataset.lightbox;
      const type = btn.dataset.type || 'image';
      const overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';
      overlay.innerHTML = `
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-content">
          <button class="lightbox-close" aria-label="Close">×</button>
          ${type === 'video' ? `<video src="${src}" controls autoplay playsinline class="lightbox-media"></video>` : `<img src="${src}" class="lightbox-media" alt="">`}
        </div>
      `;
      document.body.appendChild(overlay);
      overlay.querySelector('.lightbox-backdrop').addEventListener('click', () => overlay.remove());
      overlay.querySelector('.lightbox-close').addEventListener('click', () => overlay.remove());
      document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', esc); } });
    });
  });
})();
