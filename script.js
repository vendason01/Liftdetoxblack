// script.js

// Scroll suave para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Timer regressivo para urgência
function startCountdown(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration; // reinicia para simular urgência contínua
    }
  }, 1000);
}

window.onload = function () {
  const fiveMinutes = 60 * 5;
  const display = document.querySelector('#countdown');
  if (display) startCountdown(fiveMinutes, display);
};
