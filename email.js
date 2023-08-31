function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("messageBox").value;
  
    var xhr = new XMLHttpRequest();
    var url = "send_email.php";
    var params = "name=" + name + "&email=" + email + "&message=" + message;
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert("Message sent successfully!");
      }
    };
  
    xhr.send(params);
  }
  
  function reset() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("messageBox").value = "";
  }