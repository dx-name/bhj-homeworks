document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const valueEl = dropdown.querySelector('.dropdown__value');
    const listEl = dropdown.querySelector('.dropdown__list');
    const links = dropdown.querySelectorAll('.dropdown__link');

    valueEl.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = listEl.classList.contains('dropdown__list_active');
      if (isActive) {
        listEl.classList.remove('dropdown__list_active');
      } else {
        document.querySelectorAll('.dropdown__list.dropdown__list_active').forEach(l => {
          l.classList.remove('dropdown__list_active');
        });
        listEl.classList.add('dropdown__list_active');
      }
    });

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const newValue = link.textContent.trim();
        valueEl.textContent = newValue;

        listEl.classList.remove('dropdown__list_active');
      });
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown__list.dropdown__list_active').forEach(l => {
      l.classList.remove('dropdown__list_active');
    });
  });
});
