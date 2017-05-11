<?php
// Start session, shopping cart is stored in session
error_reporting(-1);

// Get the action that controlls what will happen
$action = empty($_GET['action']) ? null : $_GET['action'];

if($action == 'sum') {
  session_name('shoppingcart');
  session_start();
  echo json_encode( ( isset($_SESSION['cart']) ? $_SESSION['cart'] : array('sum'=>0) ) );
  exit;
}
else if($action == 'pay') {
  //session_name('checkout-with-ajax');
  session_name('shoppingcart');
  session_start();
  //  include('cc_form.php');

  // Fix that submit button is not included in form submit from javaScript
  $_POST['doPay'] = true;
  //$status = $form->Check();
  $status=true;

  $output = 'Formuläret är inte ok';
  $outputClass = 'error';
  $error = null;
  $payment = 0;
  if($status === true) {
    //  $payment = $form['payment']['value'];
    if(isset($_SESSION['cart'])) {
      $sum = $_SESSION['cart']['sum'];
      $sumout=substr(json_encode(array('sum' => $sum)), 7, -1);
    } else {
      $sum = 0;
      $sumout="0";
    }
    $sumout=substr(json_encode(array('sum' => $sum)), 7, -1);
    $output = "Transaktionen var lyckad. ";
    $outputClass = 'success';
  }
  else if($status === false){
    $output = "Formuläret innehåller felaktiga värden. Rätta de felaktiga värdena och försök igen.";
    //  $error = $form->GetValidationErrors();
  }

  sleep(3);
  if(isset($_SESSION['cart'])) {
    $sum = $_SESSION['cart']['sum'];
  } else {
    $sum = 0;
  }

  echo json_encode(array('status' => $status, 'output' => $output, 'outputClass' => $outputClass, 'errors' => $error, 'sum' => $sum));
  exit;
}

echo "Inget val gjort.";
