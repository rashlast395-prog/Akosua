/* Robust loader with forced hide */
(function () {
  try {
    const LOADER_FALLBACK_MS = 2800;
    const loader = document.getElementById('loader');
    if (!loader) return;

    let done = false;
    const hide = () => {
      if (done) return;
      done = true;
      try {
        loader.style.transition = 'opacity 0.35s ease, visibility 0.35s ease';
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        loader.style.pointerEvents = 'none';
      } catch (e) {}
      try { document.body.style.overflow = ''; } catch ( e) {}
      setTimeout(() => { try { if (loader.parentNode) loader.remove(); } catch(e){} }, 400);
    };

    setTimeout(hide, LOADER_FALLBACK_MS);
    window.addEventListener('error', () => hide(), true);
    window.addEventListener('unhandledrejection', () => hide());
  } catch ( e) {
    console.error('[loader] fatal error:',  e);
    try { document.body.style.overflow = ''; } catch(e){}
  }
})();
