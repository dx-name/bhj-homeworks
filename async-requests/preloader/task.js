const itemsContainer = document.getElementById('items');
const loader = document.getElementById('loader');

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then(response => response.json())
  .then(data => {
    const valutes = data.response.Valute;

    itemsContainer.innerHTML = '';

    Object.keys(valutes).forEach(key => {
      const valute = valutes[key];

      const item = document.createElement('div');
      item.className = 'item';

      item.innerHTML = `
        <div class="item__code">${valute.CharCode}</div>
        <div class="item__value">${valute.Value}</div>
        <div class="item__currency">руб.</div>
      `;

      itemsContainer.appendChild(item);
    });

    loader.classList.remove('loader_active');
  })
  .catch(error => {
    console.error('Ошибка загрузки курса валют:', error);
  });
