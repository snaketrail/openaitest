window.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const icon = document.querySelector('.menu-toggle .icon');
    const iconText = icon.textContent;
  
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      icon.textContent = menu.classList.contains('active') ? '✕' : iconText;
      

    //   if (menu.classList.contains('active')) {
    //     serviceItem.style.zIndex = '-1';
    //   } else {
    //     serviceItem.style.zIndex = ''; 
    //   }
    // });
});

  
window.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu a');
    
  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      menuLinks.forEach((link) => {
        link.classList.remove('active');
      });
      e.target.classList.add('active');
    });
  });
});

  
  
function goToHome(){
  window.location.href = "index.html";
}})