<?php
// TKE CARE OF FORM SUBMISSION
//1. validate the data
//2.prepare the email
//3. Send out the email
//4. return proper info to json
// - whats json
// - whats ajax
// - how to build json

header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json; charset-UTF-8');

//This is returning information back properly in json
//$results = [
    //'key1' => 'value1',
    //'Key2' => 'value2'
//];

$results = [];

//acessig the data submission 
$results = $_POST; //preset variable - predefined php

if(isset($_POST['firstname'])) { //checking for the first name
    $visitor_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING); //validating that the input is a string
}
if(isset($_POST['lastname'])) { //checking for the last name
    $visitor_name = filter_var($_POST['lastname'], FILTER_SANITIZE_STRING); //validating that the input is a string
}
if(isset($_POST['email'])) { //checking for the email
    $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL); //validating that the input is a real email! 
}
if(isset($_POST['subject'])) { //checking for the subject
    $visitor_subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING); 
}

if(isset($_POST['message'])) { //checking for the email
    $visitor_message = filter_var(htmlspecialchars($_POST['message']), FILTER_VALIDATE_EMAIL); //the special chars converts any special characters to encode - this protects form people submitting JS 
}

$results['name'] = $visitor_name; //this puts the first and last name together
$results['message'] = $visitor_message;

//Preparing the Email
$email_subject = 'Inqury from Site';
$email_recipient = 'mmorr7@uwo.ca';
$email_message = sprintf('Mane: %s, Email: %s, Subject: %s, Message: %s', $visitor_name, $visitor_email, $visitor_subject, $visitor_message); //put all three variables together - php grabs the keys and replaces the %s
$email_headers = array(
    'From' => $visitor_email //not best practice but my domain doesnt host an email. 
);

//send email

mail($email_recipient, $email_subject, $email_message, $email_headers); //php mail function - combines all the attrbutes we already defines - packages and sends. 
if($email_result) {
    $results['message'] = sprintf('Thank you for dropping us a line, %s. We will hit you back as soon as we can!', $visitor_name);
}else if (empty($_POST['name'])){ //using an else if statement to look if the name box is empty - if so the email will not send
    $results['message'] = sprintf('opps! Please fill out your name and try again!');
}else if (empty($_POST['email'])){
    $results['message'] = sprintf('oops! Please fill out your email and try again!');
} else {
    $results['message'] = sprintf('So sorry that email did not get to us!');
}

echo json_encode($results); // encoding the data in json