
function changeContent(title, text, imageUrl, button) {
    var itemTitle = document.getElementById('itemTitle');
    var itemText = document.getElementById('itemText');
    var itemImage = document.getElementById('itemImage');
  
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => btn.classList.remove('active1'));
    button.classList.add('active1'); 


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