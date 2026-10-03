(() => {
  let theme = 'dark';
  try { const saved = localStorage.getItem('theme'); if (['dark','light'].includes(saved)) theme = saved; } catch {}
  document.documentElement.dataset.theme = theme;
})();
