<?php
$pos = strrpos($qs, '://'); 
$pos = strpos($qs, '/', $pos + 4);
$_SERVER['REQUEST_URI'] = substr($qs, $pos); 
$_SERVER['PATH_INFO'] = $_SERVER['REQUEST_URI']; 
include('index.php'); 
?>