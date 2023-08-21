window.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const icon = document.querySelector('.menu-toggle .icon');
    const iconText = icon.textContent;
    const serviceItem = document.querySelector('.service-item');
  
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      icon.textContent = menu.classList.contains('active') ? '✕' : iconText;
      
      // Toggle the z-index of service-item
      if (menu.classList.contains('active')) {
        serviceItem.style.zIndex = '-1';
      } else {
        serviceItem.style.zIndex = ''; // Reset to default value
      }
    });
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
    }
    



    function changeContent(url, button) {
        var iframe = document.getElementById('content-iframe');
        iframe.src = url;
    
        var buttons = document.querySelectorAll('.button');
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    }