/* Robust loader with fallback timeout */
(function () {
  const LOADER_FALLBACK_MS = 5000;
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.setAttribute('aria-hidden', 'true');
  loader.innerHTML = `
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style="opacity:0.9" aria-hidden="true">
      <circle cx="26" cy="26" r="22" stroke="#e5e5e5" stroke-width="3"/>
      <path d="M26 4a22 22 0 0 1 16 7" stroke="#FF6B2B" stroke-width="3" stroke-linecap="round"/>
    </svg>
    <div class="loader-bar"></div>
  `;
  document.body.appendChild(loader);
  document.body.style.overflow = 'hidden';

  let loaded = false;
  const hide = () => {
    if (loaded) return;
    loaded = true;
    loader.classList.add('hidden');
    document.body.style.overflow = '';
    setTimeout(() => { if (loader.parentNode) loader.remove(); }, 700);
  };

  window.addEventListener('load', () => setTimeout(hide, 400));
  setTimeout(hide, LOADER_FALLBACK_MS);

  window.addEventListener('error', () => hide(), true);
  window.addEventListener('unhandledrejection', () => hide());
})();
