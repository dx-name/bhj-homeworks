document.addEventListener('DOMContentLoaded', () => {
  const book = document.querySelector('.book');
  const fontSizeButtons = document.querySelectorAll('.font-size');

  fontSizeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      fontSizeButtons.forEach(b => b.classList.remove('font-size_active'));

      btn.classList.add('font-size_active');

      const size = btn.dataset.size;

      book.classList.remove('book_fs-small', 'book_fs-big');

      if (size === 'small') {
        book.classList.add('book_fs-small');
      } else if (size === 'big') {
        book.classList.add('book_fs-big');
      }
    });
  });
});
