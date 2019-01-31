<?php

// Trocar os valores abaixo

$emailenvio = 'contato@leandrofialho.com ';
$assunto = 'Formulário SISLAME';
$url = 'http://leandrofialho.com';

// Mude até aqui apenas

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$instituicao = $_POST['instituicao'];
$cargo = $_POST['cargo'];
$mensagem = $_POST['mensagem'];

$body = "$mensagem\n\n---------------\n\nNome: $nome\nEmail: $email\nTelefone: $telefone\nInstituição: $instituicao\nCargo: $cargo";

if ($_POST['leaveblank'] != '' or $_POST['dontchange'] != 'http://') {

  echo "Não foi possível enviar o e-mail. Tente novamente ou entre em contato com " . $emailenvio;
  echo "<meta HTTP-EQUIV='Refresh' CONTENT='10;URL=" . $url . "'>";

} else if (isset($_POST['email'])) {

require ('./PHPMailer/PHPMailerAutoload.php');

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
$mail->WordWrap = 70;
$mail->addAddress($emailenvio);

$mail->From = $email;
$mail->FromName = $nome;
$mail->AddReplyTo($email, $nome);
$mail->Subject = $assunto;

$mail->Body = $body;

if(!$mail->send()) {
  echo "Não foi possível enviar o e-mail. Tente novamente ou entre em contato com " . $emailenvio;
  echo "<meta HTTP-EQUIV='Refresh' CONTENT='10;URL=" . $url . "'>";
} else {
  echo "E-mail enviado com sucesso!";
  echo "<meta HTTP-EQUIV='Refresh' CONTENT='2;URL=" . $url . "'>";
}

}

?>