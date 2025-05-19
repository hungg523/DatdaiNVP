/* ========== Mobile menu toggle ========== */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const contactIcons = document.querySelector('.contact-icons');
  menuToggle.addEventListener('click', function () {
    mainNav.classList.toggle('open');
    menuToggle.classList.toggle('open');
    if (window.innerWidth <= 900 && contactIcons) {
      contactIcons.style.display = mainNav.classList.contains('open') ? 'none' : 'flex';
    }
  });
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        if (link.classList.contains('dropdown-toggle')) {
          e.preventDefault();
          const dropdown = link.parentElement;
          const content = dropdown.querySelector('.dropdown-content');
          if (dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
          } else {
            document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
            dropdown.classList.add('open');
          }
          return;
        }
        mainNav.classList.remove('open');
        menuToggle.classList.remove('open');
        if (contactIcons) contactIcons.style.display = 'flex';
      }
    });
  });
  function handleDropdownMobile() {
    if (window.innerWidth <= 900) {
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
    } else {
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
    }
  }
  window.addEventListener('resize', handleDropdownMobile);
  document.addEventListener('DOMContentLoaded', handleDropdownMobile);