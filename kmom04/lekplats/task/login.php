<?php
// Create the session
session_name(preg_replace('/[^a-z\d]/i', '', __DIR__));
session_start();

// Get incoming on what to do
$do = isset($_GET['do']) ? $_GET['do'] : null;

// Do login
if($do == 'login') {
    if(in_array($_POST['user'], array('doe', 'root', 'admin'))) {
        $_SESSION['user'] = $_POST['user'];
        $output = "Lyckad login som användare: " . $_SESSION['user'];
    }
    else {
        $_SESSION['user'] = 'Okänd användare, inte autentiserad';
        $output = "Felaktik login, försök igen som användare user, root eller admin";
    }
}

// Do login
if($do == 'logout') {
        $_SESSION['user'] = '';
        $output = "Lyckad utloggning";
}

// Do login
if($do == 'status') {
  if($_SESSION['user']=='') {
        $output = "Användare är inte inloggad: ";
  }
  else {
        $output = "Användare är inloggad: " . $_SESSION['user'];
  }
}

// Deliver the response, as a JSON object containing the name of the user.
header('Content-type: application/json');
echo json_encode(array("output" => $output));
