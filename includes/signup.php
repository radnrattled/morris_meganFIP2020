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

if(isset($_POST['name'])) { //checking for the first name
    $visitor_name = filter_var($_POST['name'], FILTER_SANITIZE_STRING); //validating that the input is a string
}

if(isset($_POST['email'])) { //checking for the email
    $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL); //validating that the input is a real email! 
}




echo json_encode($results); // encoding the data in json - for the sign up I do not need to send out any email I just need to add the data to the database for later use.