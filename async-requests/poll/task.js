const pollTitleEl = document.getElementById('poll__title');
const pollAnswersEl = document.getElementById('poll__answers');

fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка сети или сервера');
    }
    return response.json();
  })
  .then(data => {
    const { title, answers } = data.data;

    pollTitleEl.textContent = title;

    pollAnswersEl.innerHTML = '';
    answers.forEach(answerText => {
      const btn = document.createElement('button');
      btn.className = 'poll__answer';
      btn.type = 'button';
      btn.textContent = answerText;

      btn.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });

      pollAnswersEl.appendChild(btn);
    });
  })
  .catch(error => {
    console.error('Не удалось загрузить опрос:', error);
    pollTitleEl.textContent = 'Не удалось загрузить опрос';
    pollAnswersEl.innerHTML = '<p>Попробуйте позже.</p>';
  });
