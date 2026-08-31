const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const progressBar = document.getElementById('progress');
const sendBtn = document.getElementById('send');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const file = fileInput.files[0];
  if (!file) {
    alert('Пожалуйста, выберите файл');
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', (event) => {
    if (event.lengthComputable) {
      const percentComplete = event.loaded / event.total;
      progressBar.value = percentComplete;
    }
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.send(formData);

  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      alert('Файл успешно загружен!');
      progressBar.value = 0;
      form.reset();
    } else {
      alert('Ошибка при загрузке файла');
      console.error(xhr.status, xhr.responseText);
    }
  });

  xhr.addEventListener('error', () => {
    alert('Произошла ошибка сети');
  });
});
