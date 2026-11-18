const filters = document.querySelector('.filters');
const filterButtons = [...filters.querySelectorAll('button')];
const projects = [...document.querySelectorAll('[data-category]')];
const status = document.querySelector('#filter-status');

filters.hidden = false;

filters.addEventListener('click', (event) => {
  const selected = event.target.closest('button[data-filter]');
  if (!selected) return;

  filterButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button === selected));
  });

  const category = selected.dataset.filter;
  projects.forEach((project) => {
    project.hidden = category !== 'all' && project.dataset.category !== category;
  });

  const visibleCount = projects.filter((project) => !project.hidden).length;
  status.textContent = `Showing ${visibleCount} projects.`;
});
