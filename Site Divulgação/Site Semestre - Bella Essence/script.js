const container = document.querySelector('.carrossel .container');
const imagens = container ? Array.from(container.querySelectorAll('img')) : [];
let indice = 0;

function avancarAutomatico() {
  if (!container || imagens.length === 0) return;
  indice = (indice + 1) % imagens.length;
  container.style.transform = `translateX(-${indice * 100}%)`;
}

// inicia no primeiro slide
if (container) container.style.transform = 'translateX(0)';

// Ajuste de tempo: 3000ms por slide (3s). Pode ser alterado abaixo.
const TEMPO_MS = 3000;
let intervalo = setInterval(avancarAutomatico, TEMPO_MS);

// opcional: pausar ao passar o mouse
if (container) {
  container.addEventListener('mouseenter', () => clearInterval(intervalo));
  container.addEventListener('mouseleave', () => { intervalo = setInterval(avancarAutomatico, TEMPO_MS); });
}
function func() {
  if (window.location.pathname.endsWith('app.html')) {
    document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = 'app.html#funcionalidades';
  }
}

function sobre() {
  if (window.location.pathname.endsWith('app.html')) {
    document.getElementById('sobre-app')?.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = 'app.html#sobre-app';
  }
}

function instalar() {
  window.location.href = 'instalar.html';
}

function btn1() {
  window.location.href = 'instalar.html';
}

function btn2() {
  window.location.href = 'instalar.html';
}