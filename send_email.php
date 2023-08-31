<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "simdim.marketing@gmail.com"; 
  $subject = "New Contact Form Submission";
  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "Content-type: text/html\r\n";

  $mailBody = "Name: " . $name . "<br>";
  $mailBody .= "Email: " . $email . "<br>";
  $mailBody .= "Message: " . $message;

  if (mail($to, $subject, $mailBody, $headers)) {
    echo "Email sent successfully!";
  } else {
    echo "Failed to send email";
  }
}
?>