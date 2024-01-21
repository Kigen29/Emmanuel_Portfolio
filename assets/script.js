console.log('Script loaded.');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM content loaded.');

  const scrollLinks = document.querySelectorAll('.nav-link');

  if (scrollLinks.length === 0) {
    console.error('No navigation links found.');
    return;
  }

  scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (!targetElement) {
        console.error('Target element not found:', targetId);
        return;
      }

      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

//navbar toggler 
let navToggler = document.getElementById('navbar-toggler');
let navCollapse = document.querySelector('.navbar-collapse');

navToggler.addEventListener('click', () => {
    navCollapse.classList.toggle('showNav');
});
