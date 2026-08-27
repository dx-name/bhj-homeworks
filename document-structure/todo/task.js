document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tasks__form');
  const input = document.getElementById('task__input');
  const list = document.getElementById('tasks__list');

  list.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.task__remove');
    if (!removeBtn) return;

    e.preventDefault();

    const taskDiv = removeBtn.closest('.task');
    if (taskDiv) {
      taskDiv.remove();
    }
  });

  function addTask(text) {
    if (!text.trim()) return;

    const taskEl = document.createElement('div');
    taskEl.className = 'task';

    const titleEl = document.createElement('div');
    titleEl.className = 'task__title';
    titleEl.textContent = text;

    const removeLink = document.createElement('a');
    removeLink.className = 'task__remove';
    removeLink.href = '#';
    removeLink.textContent = '×';

    taskEl.appendChild(titleEl);
    taskEl.appendChild(removeLink);
    list.appendChild(taskEl);

    input.value = '';
    input.focus();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(input.value);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTask(input.value);
    }
  });
});
