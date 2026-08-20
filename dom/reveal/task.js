document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  function checkVisibility() {
    revealElements.forEach(el => {
      if (el.classList.contains('reveal_active')) return;

      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight * 0.8) {
        el.classList.add('reveal_active');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);

  checkVisibility();
});
