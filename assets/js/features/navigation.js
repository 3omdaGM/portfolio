export function initNavigation() {
  const menu = document.querySelector('#navigation');
  const toggle = document.querySelector('.menu-toggle');
  const links = [...menu.querySelectorAll('a')];
  const setOpen = open => {
    menu.dataset.open = String(open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  links.forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.dataset.open === 'true') { setOpen(false); toggle.focus(); }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) setOpen(false);
  });
  menu.addEventListener('focusout', event => {
    if (event.relatedTarget && !event.relatedTarget.closest('.site-header')) setOpen(false);
  });
  matchMedia('(min-width: 801px)').addEventListener('change', () => setOpen(false));
  const sections = links.map(link => document.querySelector(link.hash));
  const progress = document.querySelector('.reading-progress');
  let pending = false;
  const update = () => {
    pending = false;
    const total = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${total > 0 ? Math.min(1, Math.max(0, scrollY / total)) : 0})`;
    let active = null;
    for (const section of sections) if (section.getBoundingClientRect().top <= 160) active = section.id;
    links.forEach(link => {
      if (link.hash === `#${active}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  const schedule = () => { if (!pending) { pending = true; requestAnimationFrame(update); } };
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(document.body);
  update();
}
