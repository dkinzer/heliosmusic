<?php
header('Content-type: application/json');

if (isset($_POST['element_999'] && $_POST['element_999'] != '') {

  foreach ($_POST as $key => $value) {
    $$key = htmlspecialchars($value);
  }

  $to = "dtkinzer@gmail.com";
  $subject = "Message from helios contact form.";

  $message = "
    A message was posted with the following details:
    First: $first
    Last: $last
    Email: $email

    Message:
    $message
";

   mail($to, $subject, $message);
}
echo json_encode($_POST);

