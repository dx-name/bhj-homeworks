document.addEventListener('DOMContentLoaded', () => {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(rotator => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    
    if (cases.length < 2) return;

    let currentIndex = 0;

    const activeCase = rotator.querySelector('.rotator__case_active');
    if (activeCase) {
      currentIndex = cases.indexOf(activeCase);
    }

    function showNext() {
      cases[currentIndex].classList.remove('rotator__case_active');

      currentIndex = (currentIndex + 1) % cases.length;

      cases[currentIndex].classList.add('rotator__case_active');
    }

    const defaultSpeed = 1000;
    const speed = parseInt(cases[0].dataset.speed) || defaultSpeed;

    setInterval(showNext, speed);

    if (!activeCase) {
      cases[0].classList.add('rotator__case_active');
    }
  });
});
