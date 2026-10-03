// Small blocking script prevents a flash of the wrong theme. Storage may be disabled.
(() => {
  let theme;
  try { theme = localStorage.getItem('portfolio-theme'); } catch { /* Use system preference. */ }
  if (!['light', 'dark'].includes(theme)) theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;
})();
