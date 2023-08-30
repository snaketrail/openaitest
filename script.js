window.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const icon = document.querySelector('.menu-toggle .icon');
    const iconText = icon.textContent;
    const serviceItem = document.querySelector('.service-item');
  
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      icon.textContent = menu.classList.contains('active') ? '✕' : iconText;
      

      if (menu.classList.contains('active')) {
        serviceItem.style.zIndex = '-1';
      } else {
        serviceItem.style.zIndex = ''; 
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
    



    function changeContent(title, text, imageUrl, button) {
      var itemTitle = document.getElementById('itemTitle');
      var itemText = document.getElementById('itemText');
      var itemImage = document.getElementById('itemImage');
    
      var buttons = document.querySelectorAll('.button');
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active'); 
  

      itemTitle.textContent = title;
      itemText.textContent = text;
      itemImage.src = imageUrl;
      itemImage.alt = title;
  }
  
  function buttonHome1(){
      changeContent("Website Design", "We create stunning and responsive websites.", "images/webs1.png", event.target);
  }
  function buttonHome2(){
      changeContent("Copywriting", "Compelling content that captures your audience.", "images/articles.png", event.target);
  }
  function buttonHome3(){
      changeContent("Graphic Design", "Eye-catching visuals to convey your message.", "images/Davice.png", event.target);
  }
  function buttonHome4(){
      changeContent("SEO Audit", "Boost your online presence with our SEO expertise.", "images/marketing.png", event.target);
  }
  function buttonHome5(){
      changeContent("Virtual Assistance", "Outsource tasks and focus on what matters.", "images/virtualassistant.png", event.target);
  }
  function buttonHome6(){
      changeContent("Business Automation", "Streamline your processes for efficiency.", "images/robot1.png", event.target);
  }



// function translateToBulgarian() {

// }

// function translateToEnglish() {

// }


// var languageSwitch = document.getElementById('language-switch');


// languageSwitch.addEventListener('click', function() {
//   if () {
//       translateToBulgarian();
//   } else {
//       translateToEnglish();
//   }
// });