export function initProjects() {
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('[data-category]')];
  const count = document.querySelector('#project-count');
  buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(item => { item.setAttribute('aria-pressed', String(item === button)); item.classList.toggle('active', item === button); });
    let visible = 0;
    projects.forEach(project => {
      project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
      if (!project.hidden) visible++;
    });
    count.textContent = `Showing ${visible} ${visible === 1 ? 'project' : 'projects'}`;
  }));
}
