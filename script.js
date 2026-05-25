
// script.js

document.addEventListener('DOMContentLoaded', function() {

  // Mobile Menu
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('menu');

  let isOpen = false;

  mobileBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    
    if (isOpen) {
      menu.classList.add('active');
      mobileBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      menu.classList.remove('active');
      mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });

  // Fecha menu ao clicar em link
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) {
        menu.classList.remove('active');
        mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        isOpen = false;
      }
    });
  });

  // Tailwind Script (caso precise de configurações extras)
  console.log('%cSite Agro Produção carregado com sucesso! 🌱', 'color: green; font-weight: bold');
});
