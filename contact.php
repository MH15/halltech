<?php
    $name = strip_tags($_POST["name"]);
    $email = strip_tags($_POST["email"]);
    $phone = strip_tags($_POST["phone"]);
    $budget = strip_tags($_POST["budget"]);
    $message = strip_tags($_POST["message"]);

    $text = "<b>Fullname: </b>" . $name . "<br>" .
    "<b>E-Mail: </b> " . $email . "<br>" .
    "<b>Phone: </b> " . $phone . "<br>" .
    "<b>Budget: </b> " . $budget . "<br>" .
    "<b>Message: </b> " . $message .

    require 'assets/PHPMailerAutoload.php';
    
    $mail = new PHPMailer;
    $mail->setFrom('Contact Form');
    $mail->addAddress('info@halltechnologies.co', 'Native Tech');
    $mail->Subject  = 'Form Submission';
    
    $mail->isHTML(true);
    $mail->Body = $text;

    if(!$mail->send()) {
        header("Location: error.html");
        echo 'Mailer error: ' . $mail->ErrorInfo;
    } else {
        header("Location: index.html");
    }
?>
