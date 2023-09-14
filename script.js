window.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const icon = document.querySelector('.menu-toggle .icon');
    const iconText = icon.textContent;
  
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      icon.textContent = menu.classList.contains('active') ? '✕' : iconText;
});

  
window.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu a');
  const currentLocation = window.location.pathname; 

  menuLinks.forEach((link) => {
    const linkURL = link.getAttribute('href');

    if (currentLocation === linkURL) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});


  
  
  document.getElementsByClassName("logo")[0].addEventListener("click", function (){
    window.location.href = "index.html";
  });
})



const privacyPolicyLink = document.getElementById('privacy-policy-link');


const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');

function openModal() {
  modalOverlay.style.display = 'block';
  modal.style.display = 'block';
}


function closeModal() {
  modalOverlay.style.display = 'none';
  modal.style.display = 'none';
}


privacyPolicyLink.addEventListener('click', openModal);


modalOverlay.addEventListener('click', closeModal);

const tosPolicyLink = document.getElementById('tos-policy-link');
const modal1Overlay = document.getElementById('modal1-overlay');
const modal1 = document.getElementById('modal1');

function openModal1() {
  modal1Overlay.style.display = 'block';
  modal1.style.display = 'block';
}

function closeModal1() {
  modal1Overlay.style.display = 'none';
  modal1.style.display = 'none';
}

tosPolicyLink.addEventListener('click', openModal1);
modal1Overlay.addEventListener('click', closeModal1);


