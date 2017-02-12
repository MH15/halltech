<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $budget = $_POST['budget'];
    $message = $_POST['message'];

    $from = 'From: Native Tech'; 
    $to = 'peterhall330@outlook.com'; 
    $subject = 'Job';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']) {
	    if (mail ($to, $subject, $body, $from)) { 
	        echo '<p>Your message has been sent.</p>';
	    } else { 
	        echo '<p>Something went wrong, 
            go back and 
            try again.</p>'; 
	    }
	}
?>
