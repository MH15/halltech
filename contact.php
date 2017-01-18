<?php

$api_key = "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";
$template_id = "c22c546b-968a-44a3-b5e4-4016cd30b49c";

$fullname = strip_tags($_POST["fullname"]);
$email = strip_tags($_POST["email"]);
$phone = strip_tags($_POST["phone"]);
$content = strip_tags($_POST["message"]);

$text = "<b>Fullname: </b>" . $fullname . "<br>" .
"<b>E-Mail: </b> " . $email . "<br>" .
"<b>Phone: </b> " . $phone . "<br>" .
"<b>Message: </b> " . nl2br($content);

require 'vendor/autoload.php';

$from = new SendGrid\Email("The Luminous Tech", "theluminoustech@gmail.com");
$subject = $fullname;
$to = new SendGrid\Email("James Barr", "jamesbarrbusiness@gmail.com");
$content = new SendGrid\Content("text/html", $text);
$mail = new SendGrid\Mail($from, $subject, $to, $content);
$mail->setTemplateId($template_id);
$mail->setReplyTo(new SendGrid\Email($fullname, $email));

$sg = new \SendGrid($api_key);

$response = $sg->client->mail()->send()->post($mail);

if($response->statusCode() == 200 || $response->statusCode() == 202) {
	header("Location: thanks.html");
} else {
	header("Location: error.html");
}