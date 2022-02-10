<?php
$login = $_GET['login'] ?? '';
$password = $_GET['password'] ?? '';

$trueLogin = 'admin';
$truePassword = '1234';

if (strtolower($login) === $trueLogin && strtolower($password) === $truePassword) {
  require 'mysterious_dashboard.php';
} else {
  echo "error";
}