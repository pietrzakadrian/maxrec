<?php
include_once('classes/sendmail.php');
include_once('config.php');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if( empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || empty($_POST['g-recaptcha-response']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendMailEmptyerrorMessage
        ]
    ); 
    http_response_code(403);
    exit();
}

if (isset($_POST['g-recaptcha-response'])) {
	require('recaptcha/src/autoload.php');		
	
	$recaptcha = new \ReCaptcha\ReCaptcha($captcha, new \ReCaptcha\RequestMethod\SocketPost());
	$resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);

	if (!$resp->isSuccess()) {
        $output = json_encode(array('type'=>'error', 'text' => '<b>Captcha</b> Validation Required!'));
        http_response_code(403);	
        die($output);	
	}	
}

if ($_POST) {
    http_response_code(200);
    $subject = '[MAXREC]: ' . $_POST['name'];
    $from = $_POST['email'];
    $message = $_POST['message'];       

    $sendEmail = new Sender($adminEmail, $from, $subject, $message);
    $sendEmail->send();
} else {
 echo json_encode(
     [
        "sent" => false,
        "message" => $SendMailFailederrorMessage
     ]
 );
}