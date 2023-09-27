
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
    let image = document.getElementById('itemImage')
    image.style.marginLeft = "10px";
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



// // function translateToBulgarian() {

// // }

// // function translateToEnglish() {

// // }


// // var languageSwitch = document.getElementById('language-switch');


// // languageSwitch.addEventListener('click', function() {
// //   if () {
// //       translateToBulgarian();
// //   } else {
// //       translateToEnglish();
// //   }
// // });
// function isMobileDevice() {
//     return window.innerWidth <= 668; // You can adjust the width threshold as needed
//   }
  
//   function deleteContentInDiv(divId) {
//     const targetDiv = document.getElementById(divId);
//     if (targetDiv) {
//       while (targetDiv.firstChild) {
//         targetDiv.removeChild(targetDiv.firstChild);
//       }
//     }
//   }
  
//   // Check if it's a mobile device and then call deleteContentInDiv
//   if (isMobileDevice()) {
//     // Call the function with the ID of the div you want to clear
//     deleteContentInDiv('button-container');
  
//     function createMobileButton() {
//       // Create a new button element
//       const button = document.createElement("div");
//       button.className = "button"; // Apply the required classes
//       button.textContent = "See Next Service"; // Set the button text
    
//       // Append the button to the button container
//       const buttonContainer = document.getElementById("button-container");
//       buttonContainer.appendChild(button);
//     }
    
//     // Call the function to create the mobile button
//     createMobileButton();
//   }
  
  
//   // Array of functions
// const functionArray = [
//     buttonHome1,
//     buttonHome2,
//     buttonHome3,
//     buttonHome4,
//     buttonHome5,
//     buttonHome6,
//   ];
  
//   // Variable to keep track of the current function index
//   let currentFunctionIndex = 0;
  
//   // Function to handle button click
//   function handleButtonClick() {
//     // Get the current function from the array
//     const currentFunction = functionArray[currentFunctionIndex];
  
//     // Check if the function exists and is a callable function
//     if (typeof currentFunction === "function") {
//       currentFunction();
//     }
  
//     // Increment the index and reset if it exceeds the array length
//     currentFunctionIndex++;
//     if (currentFunctionIndex >= functionArray.length) {
//       currentFunctionIndex = 0;
//     }
//   }
  
//   // Add a click event listener to your button
//   const mobileButton = document.querySelector(".button");
//   mobileButton.addEventListener("click", handleButtonClick);
  