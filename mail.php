<?php 

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $formcontent = "From: $name \n Message: $message";
    $recipient = "csalfonsol@unal.edu.co";
    $subject = "Contact Form By CH-WEBSITE";
    $mailheader = "From: $email \r\n";
    
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    echo "Thank You!";

?>