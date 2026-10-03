export function initMotion() {
  const descriptions = {
    interface: 'Interface — responsive experiences with HTML, CSS & TypeScript.',
    application: 'Application — RESTful APIs with ASP.NET Core, CQRS & MediatR.',
    data: 'Data — relational persistence with SQL Server, MySQL & EF Core.'
  };
  const layers = [...document.querySelectorAll('[data-layer]')];
  layers.forEach(layer => layer.addEventListener('click', () => {
    layers.forEach(item => item.setAttribute('aria-pressed', String(item === layer)));
    document.querySelector('#layer-description').textContent = descriptions[layer.dataset.layer];
  }));
  // Content is visible by default; motion is only a progressive enhancement.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-entering');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    const scene = document.querySelector('.architecture-stack');
    let inView = true;
    const syncPlayback = () => { scene.style.animationPlayState = inView && !document.hidden ? 'running' : 'paused'; };
    const visibilityObserver = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; syncPlayback(); });
    visibilityObserver.observe(scene);
    document.addEventListener('visibilitychange', syncPlayback);
  }
}
