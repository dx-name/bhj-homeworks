document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const valueEl = dropdown.querySelector('.dropdown__value');
    const listEl = dropdown.querySelector('.dropdown__list');
    const links = dropdown.querySelectorAll('.dropdown__link');

    // 1. Открытие/закрытие по клику на кнопку
    valueEl.addEventListener('click', (e) => {
      e.stopPropagation(); // чтобы не срабатывал обработчик на документе для закрытия
      const isActive = listEl.classList.contains('dropdown__list_active');
      if (isActive) {
        listEl.classList.remove('dropdown__list_active');
      } else {
        // Сначала закрываем все остальные открытые списки (опционально, но удобно)
        document.querySelectorAll('.dropdown__list.dropdown__list_active').forEach(l => {
          l.classList.remove('dropdown__list_active');
        });
        listEl.classList.add('dropdown__list_active');
      }
    });

    // 2. Выбор пункта из списка
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // запрещаем переход по ссылке

        const newValue = link.textContent.trim();
        valueEl.textContent = newValue;

        // Закрываем список
        listEl.classList.remove('dropdown__list_active');
      });
    });
  });

  // 3. Закрытие по клику вне выпадающего списка (для всех сразу)
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown__list.dropdown__list_active').forEach(l => {
      l.classList.remove('dropdown__list_active');
    });
  });
});
