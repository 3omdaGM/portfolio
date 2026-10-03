export function initPreferences() {
  const root = document.documentElement;
  const themeButton = document.querySelector('#theme-toggle');
  const motionButton = document.querySelector('#motion-toggle');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let manuallyPaused = false;
  try { manuallyPaused = localStorage.getItem('portfolio-motion') === 'paused'; } catch { /* Session-only preference. */ }
  const syncTheme = () => {
    const dark = root.dataset.theme === 'dark';
    themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
    document.querySelector('meta[name="theme-color"]').content = dark ? '#111e19' : '#f5f4ed';
  };
  const syncMotion = () => {
    const paused = manuallyPaused || reducedMotion.matches;
    root.dataset.motion = paused ? 'paused' : 'running';
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.textContent = reducedMotion.matches ? 'Reduced motion enabled' : paused ? 'Resume motion ▷' : 'Pause motion Ⅱ';
    motionButton.disabled = reducedMotion.matches;
    motionButton.title = reducedMotion.matches ? 'Controlled by your device’s reduced-motion setting' : 'Control decorative animation';
  };
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch { /* Session-only preference. */ }
    syncTheme();
  });
  motionButton.addEventListener('click', () => {
    manuallyPaused = !manuallyPaused;
    try { localStorage.setItem('portfolio-motion', manuallyPaused ? 'paused' : 'running'); } catch { /* Session-only preference. */ }
    syncMotion();
  });
  reducedMotion.addEventListener('change', syncMotion);
  syncTheme();
  syncMotion();
}
