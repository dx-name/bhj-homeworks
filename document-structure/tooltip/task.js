document.addEventListener('DOMContentLoaded', () => {
  const tooltipElements = document.querySelectorAll('.has-tooltip');

  tooltipElements.forEach(el => {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = el.getAttribute('title') || '';
    el.setAttribute('data-tooltip-text', el.getAttribute('title'));
    el.removeAttribute('title');

    document.body.appendChild(tooltip);

    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      const top = rect.bottom + scrollTop + 5;
      const left = rect.left + scrollLeft;

      tooltip.style.top = top + 'px';
      tooltip.style.left = left + 'px';

      tooltip.classList.add('tooltip_active');
    });
  });

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('.has-tooltip') && !target.closest('.tooltip')) {
      const tooltips = document.querySelectorAll('.tooltip');
      tooltips.forEach(t => t.classList.remove('tooltip_active'));
    }
  });
});
