<?php
header("Content-Type:text/html; charset=utf-8");
echo "userName:".$_REQUEST[userName];
echo "password:".$_POST[password];
$data = file_get_contents("php://input");
echo $data;
exit;
?>


