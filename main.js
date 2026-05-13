const navOpenBtn = document.getElementById('nav-open-btn');
const navCloseBtn = document.getElementById('nav-close-btn');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

function openNav() {
  nav.classList.add('active');
  overlay.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeNav() {
  nav.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

navOpenBtn.addEventListener('click', openNav);
navCloseBtn.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);
