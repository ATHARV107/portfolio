// Mobile menu toggle
const menuBtn = document.getElementById('menu');
const navbar = document.querySelector('.navbar');
if (menuBtn && navbar) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
  });
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('fa-times');
      navbar.classList.remove('nav-toggle');
    });
  });
}

// Scroll-top button + scroll-spy
const scrollTopBtn = document.getElementById('scroll-top');
const navLinks = document.querySelectorAll('.navbar ul li a');
const sections = document.querySelectorAll('main section, body > section');

function onScroll() {
  if (scrollTopBtn) {
    scrollTopBtn.classList.toggle('active', window.scrollY > 200);
  }
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 220;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  if (current) {
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }
}
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);
