const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle?.addEventListener('click', () => {
  siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', siteNav.classList.contains('open'));
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 720) {
    siteNav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});
