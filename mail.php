<?php
// Email Setting
//=======================================
// $admin_email = "contabilidad@auditoresyconsultoresch.com";} -> Email for testing

$admin_email = "claudia.hurtado@auditoresyconsultoresch.com";
$from_name   = "Auditores y consultores CH";


$user_name 	= strip_tags($_POST['name']);
$user_email 	= strip_tags($_POST['email']);
$comment_text 	= strip_tags($_POST['message']);


if (!filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
	echo '5';
	exit;
}
else {
	$to  	   		= "$admin_email"; 
	$subject 		= "! Nueva solicitud de información ¡";
	$message		= "Un usuario ha ingresado a auditoresyconsultoresch.com, y quiere contactar con la empresa: <br/><br/>"; 
	$message 		.= "Nombre: $user_name <br/>";
	$message 		.= "Email: $user_email <br/>";
	$message 		.= "Mensaje: $comment_text <br/>";
	$headers  		 = "MIME-Version: 1.0\r\n";
	$headers 		.= "Content-type: text/html; \r\n";
	$headers 		.= "From: $from_name";	
	$send 			= mail($to, $subject, $message, $headers);
	echo '1';		
	exit;
}


?>