/* Theme toggle with localStorage + system preference */
(function () {
  const html = document.documentElement;
  const key = 'theme';
  const get = () => localStorage.getItem(key);
  const set = (v) => localStorage.setItem(key, v);
  const apply = (dark) => html.classList.toggle('dark', dark);
  const init = () => {
    const saved = get();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    apply(saved ? saved === 'dark' : prefersDark);
  };
  init();
  window.toggleTheme = () => {
    const next = !html.classList.contains('dark');
    apply(next); set(next ? 'dark' : 'light');
  };
})();
